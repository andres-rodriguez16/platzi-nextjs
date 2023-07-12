const path = require('path')

module.exports = {
  async rewrites() {
    return [
      {
				// Nueva ruta
        source: '/avocado/:path*',
				// De que ruta vendrá
        destination: '/product/:path*',
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
