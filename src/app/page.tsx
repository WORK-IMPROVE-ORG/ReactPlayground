import { loadEnvConfig } from '@next/env'
// root '/' URL

export default function Page() {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  console.log('process.env.APP_NAME', process.env.APP_NAME);
  console.log('process.env.NEXT_PUBLIC_APP_ENV', process.env.NEXT_PUBLIC_APP_ENV);
  console.log('process.env.API_KEY', process.env.API_KEY);
  return (
    <div>
      <h1>HELLO BASE PROJECT</h1>
      <div>NODE_ENV: [{process.env.NODE_ENV}]</div>
      <div>APP_NAME: [{process.env.APP_NAME}]</div>
      <div>APP_ENV: [{process.env.NEXT_PUBLIC_APP_ENV}, {process.env.APP_ENV}]</div>
      <div>API_KEY: [{process.env.API_KEY}]</div>
    </div>
  )
}
