import packageJson from '../../package.json'

const { version } = packageJson

const uri: { [key: string]: string } = {
  development:
    'http://consigaki-stg.eba-wfmmb8xh.sa-east-1.elasticbeanstalk.com',
  production:
    'http://consigaki-stg.eba-wfmmb8xh.sa-east-1.elasticbeanstalk.com',
  test: 'http://consigaki-stg.eba-wfmmb8xh.sa-east-1.elasticbeanstalk.com',
}

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export { uri, version, NEXT_PUBLIC_BASE_URL }
