function domainName(url){
  return url.indexOf('www.') >= 0 
                  ? url.split('.')[1]
                  : url.indexOf('://') > 0
                      ? url.slice(url.indexOf('://')+3,url.indexOf('.'))
                      : url.indexOf('www.') == -1 && url.indexOf('://') == -1
                          ? url.slice(0,url.indexOf('.'))
                          : url
}