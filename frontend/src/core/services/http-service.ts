import useLoader from '@/core/hooks/userLoader'
import http from '@/core/interceptors/interceptor'

class HttpService {
  public postRequest = (url: string, data): Promise<any> => {
    const { enableLoader, hideLoader } = useLoader()
    enableLoader()
    return http.post(url, data).then(
      (respose: any) => {
        hideLoader()
        return respose
      },
      (error: Error) => {
        hideLoader()
        return Promise.reject(error)
      }
    )
  }
  public getRequest = (url: string): Promise<any> => {
    const { enableLoader, hideLoader } = useLoader()
    enableLoader()
    return http.get(url).then(
      (respose: any) => {
        hideLoader()
        return respose
      },
      (error: Error) => {
        hideLoader()
        return Promise.reject(error)
      }
    )
  }
}

export default HttpService
