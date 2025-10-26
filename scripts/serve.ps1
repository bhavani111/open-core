param([int]$Port = 8000)

$root = Get-Location
$target = Join-Path $root "_site"

Write-Host "Serving folder: $target on http://127.0.0.1:$Port"
Start-Sleep -Milliseconds 500
Start-Process "http://127.0.0.1:$Port"
Push-Location $target
try { python -m http.server $Port } finally { Pop-Location }
