// this file is for the 'status' property, as the Error type doesn't have one
interface Error {
  name?: string;
  stack?: string;
  message?: string;
  status?: number;
}

export default Error;
