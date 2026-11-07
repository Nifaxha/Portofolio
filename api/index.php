<?php

// 1. Handled static files (CSS, JS, Images, Favicon) dari folder /public
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
if ($uri !== '/' && file_exists(__DIR__ . '/../public' . $uri)) {
    return false;
}

// 2. Buat folder sementara di /tmp serverless Vercel
$storagePath = '/tmp/storage';
$dirs = [
    $storagePath . '/framework/views',
    $storagePath . '/framework/sessions',
    $storagePath . '/framework/cache',
    $storagePath . '/logs',
    '/tmp/bootstrap/cache',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// 3. Environment Variables Override untuk sistem /tmp
putenv("APP_STORAGE_PATH={$storagePath}");
putenv("VIEW_COMPILED_PATH={$storagePath}/framework/views");
putenv("APP_SERVICES_CACHE=/tmp/bootstrap/cache/services.php");
putenv("APP_PACKAGES_CACHE=/tmp/bootstrap/cache/packages.php");

$_ENV['APP_STORAGE_PATH'] = $storagePath;
$_ENV['VIEW_COMPILED_PATH'] = "{$storagePath}/framework/views";
$_ENV['APP_SERVICES_CACHE'] = '/tmp/bootstrap/cache/services.php';
$_ENV['APP_PACKAGES_CACHE'] = '/tmp/bootstrap/cache/packages.php';

// 4. Load Autoloader Composer
require __DIR__ . '/../vendor/autoload.php';

// 5. Bootstrap Aplikasi Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

if (method_exists($app, 'useStoragePath')) {
    $app->useStoragePath($storagePath);
}

// 6. Jalankan Request (Support Laravel 11 dan Laravel 10)
if (method_exists($app, 'handleRequest')) {
    // Laravel 11+
    $app->handleRequest(Illuminate\Http\Request::capture());
} else {
    // Laravel 10-
    $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
    $response = $kernel->handle($request = Illuminate\Http\Request::capture());
    $response->send();
    $kernel->terminate($request, $response);
}