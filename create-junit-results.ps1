$content = Get-Content .\reports\report.json | npm run junit
$content = $content.Where({ $_ -like "*xml*" }, 'SkipUntil') 
Write-Host $content

# Use write all lines to set to UTF-8 without BOM.
[System.IO.File]::WriteAllLines(".\reports\junit.xml", $content)
