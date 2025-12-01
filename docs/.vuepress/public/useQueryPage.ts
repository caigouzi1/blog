import { reactive, ref } from 'vue'

const initPage = {
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 50, 100, 200],
  total: 0,
  background: true,
  layout: 'total, prev, pager, next, sizes, jumper',
}

interface TableHooksUpdateOtherParams {
  total: number
}

type PageConfig = typeof initPage

interface QueryPageConfig<T> {
  immediate?: boolean
  page?: Partial<PageConfig>
  noPage?: boolean
  params?: T
  orderByFiled?: string
  orderTypeField?: string
}

export default function useQueryPage<T extends Record<string, any>>(callback: (queryParams: Partial<PageQuery> & T, updateTotal: (val: TableHooksUpdateOtherParams) => void) => void, config: QueryPageConfig<T> = {}) {
  const configPage = config.page || {}
  const immediate = config.immediate ?? true

  const orderByFiled = config.orderByFiled || 'properties'
  const orderTypeField = config.orderTypeField || 'sort'

  const sortParams = {
    sortFiled: '',
    sortType: '',
  }

  const initParams = cloneDeep(config.params || {}) as T

  const params = ref<T>(cloneDeep(initParams))
  /**
   * 分页参数
   */
  const page = reactive<PageConfig>({
    ...initPage,
    ...configPage,
  })

  /**
   * 加载状态
   */
  const loading = ref(false)

  watch(
    [() => page.pageSize, () => page.currentPage],
    () => {
      queryPage()
    },
    { immediate },
  )

  /**
   * 查询分页数据
   * @returns {Promise<void>}
   */
  async function queryPage() {
    if (callback) {
      loading.value = true
      const setPage = ({ total }: TableHooksUpdateOtherParams) => {
        page.total = total
      }
      try {
        const orderParams: any = {}
        if (sortParams.sortFiled && sortParams.sortType) {
          orderParams[orderByFiled] = sortParams.sortFiled
          orderParams[orderTypeField] = sortParams.sortType
        }

        if (config.noPage) {
          await callback(Object.assign({ }, params.value, orderParams), setPage)
        } else {
          await callback(Object.assign({ }, { pageSize: page.pageSize, currentPage: page.currentPage }, orderParams, params.value), setPage)
        }
        loading.value = false
      } catch {
        loading.value = false
      }
    }
  }

  /**
   * 重置当前页码
   */
  function resetPage() {
    page.currentPage = 1
  }

  /**
   * 重置筛选条件
   */
  function resetParams() {
    if (config.params) {
      params.value = cloneDeep(initParams)
    }
  }

  /**
   * 重置筛选条件并搜素
   */
  function resetParamsQuery() {
    resetParams()
    resetPage()
    queryPage()
  }

  function sortChange(data: any) {
    sortParams.sortFiled = data.prop

    const sortMap = {
      ascending: 'ASC',
      descending: 'DESC',
    } as any

    sortParams.sortType = sortMap[data.order] || ''
    queryPage()
  }

  return { pageProps: page, params, sortChange, queryPage, resetPage, resetParams, resetParamsQuery, loading }
}
