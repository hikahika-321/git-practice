$inputJson = [Console]::In.ReadToEnd() | ConvertFrom-Json
$filePath = $inputJson.tool_input.file_path

if (-not $filePath) {
  exit 0
}

$extension = [System.IO.Path]::GetExtension($filePath)

if ($extension -notin @(".js", ".mjs", ".cjs")) {
  exit 0
}

$lintOutput = & npx eslint -- $filePath 2>&1
$exitCode = $LASTEXITCODE

if ($exitCode -eq 0) {
  exit 0
}

$reason = "ESLint failed after editing $filePath`n$($lintOutput -join "`n")"

@{
  decision = "block"
  reason   = $reason
} | ConvertTo-Json -Compress
