export default ({headData, initialData, body}) => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="apple-touch-icon" href="/public/logo.png" />
    <meta name="description" content="${headData.description}">
    <meta name="keywords" content="${headData.keywords}">
    <meta property="og:title" content="${headData.og.title}">
    <meta property="og:url" content="${headData.og.url}">
    <meta property="og:description" content="${headData.og.description}">
    <meta property="og:image:type" content="${headData.og.image_type}">
    <meta property="og:image" content="${headData.og.image}">

    <link rel="canonical" content="${headData.canonical}">

    <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!--font-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&amp;subset=latin-ext" rel="stylesheet" type='text/css'>
    <link rel="stylesheet" href="public/res/font-awesome/css/font-awesome.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="public/res/css/styles.css" />

    <title>${headData.title}</title>
    <script>window.__initialData__ = ${JSON.stringify(initialData)}</script>
  </head>
  <body class="DOMisLoaded AllIsLoaded">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${body}</div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"></script>
    
    <script src="/public/vendors~index.js"></script>
    <script src="/public/index.js"></script>
  </body>
</html>
  `;
};