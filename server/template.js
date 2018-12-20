export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        ${process.env.NODE_ENV == 'project'?<link rel="stylesheet" href="/dist/index.css" />:''}
        
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/dist/main.js"></script>
    </html>
  `;
};
