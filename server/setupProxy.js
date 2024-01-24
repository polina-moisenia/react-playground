/*import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
    app.use(
      '/items',
      createProxyMiddleware({
        target: 'https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items',
        changeOrigin: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
          }
      })
    );
  }*/