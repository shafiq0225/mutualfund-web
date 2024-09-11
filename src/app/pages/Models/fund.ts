export interface Fund {
    id: number
    fundname: string
    previousrate: string
    previousdate: string
    currentrate: string
    currentdate: string
    status: string
    scheme: Scheme
  }
  
  export interface Scheme {
    name: string
  }