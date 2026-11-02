<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{ $portfolio['profile']['nama'] ?? 'Dwi Haris Riza Darmawan' }} | Portofolio</title>
    <meta name="description" content="Portofolio proyek dan karya." />
    <meta name="theme-color" content="#E8EDF1" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Figtree:wght@400;500;600&display=swap"
      rel="stylesheet"
    />

    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
  </head>
  <body class="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
    <div 
        id="app" 
        data-portfolio="{{ json_encode($portfolio ?? []) }}" 
        data-page="{{ $page ?? 'home' }}"
    ></div>
  </body>
</html>