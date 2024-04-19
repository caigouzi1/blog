const loadVideo = function (file: File): Promise<HTMLVideoElement> {
  return new Promise(function (resolve, reject) {
    const videoElem = document.createElement('video');
    const dataUrl = URL.createObjectURL(file);
    // 当前帧的数据是可用的
    videoElem.onloadeddata = function () {
      resolve(videoElem);
    };
    videoElem.onerror = function () {
      reject('video 后台加载失败');
    };
    // 设置 auto 预加载数据， 否则会出现截图为黑色图片的情况
    videoElem.setAttribute('preload', 'auto');
    videoElem.src = dataUrl;
  });
};


const getFileName = (name: string) => {
  // 如果是url那么取最后的名字 如果不是直接返回
  return name.substring(0, name.lastIndexOf('.'));
};

/**
 * @description 根据视频文件生成第一帧画面作为图片
 * @param file 视频文件
 * @returns 封面图片文件
 */
export function getVideoCover(file: File): Promise<File> {
  return new Promise(function (resolve, reject) {
    loadVideo(file).then((video) => {
      try {
        const canvasElem = document.createElement('canvas');
        const { videoWidth, videoHeight } = video;
        canvasElem.width = videoWidth;
        canvasElem.height = videoHeight;
        canvasElem.getContext('2d')?.drawImage(video, 0, 0, videoWidth, videoHeight);
        // 导出成blob文件
        canvasElem.toBlob((blob) => {
          // 将blob文件转换成png文件
          const toThumbFile = (blob: Blob) => new File([blob], getFileName(file.name) + '.png');
          if (blob) {
            const thumbFile = toThumbFile(blob);
            resolve(thumbFile);
          } else {
            reject('获取视频封面失败');
          }
        }, 'image/png');
      } catch (error) {
        reject('获取视频封面失败');
      }
    });
  });
}
