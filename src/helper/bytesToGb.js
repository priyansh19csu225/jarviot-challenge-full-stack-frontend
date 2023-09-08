const bytesToGB = (bytes) => {
    const GB = bytes / 1073741824;
    return GB;
  };
export const bytesToMB = (bytes) => {
    const MB = bytes / 1024 / 1024;
    return MB.toFixed(2);
  }

  export default bytesToGB;