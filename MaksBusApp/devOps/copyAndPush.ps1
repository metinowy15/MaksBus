
$buildPath = 'C:\Users\jakubm.ASTOR\Desktop\MaxBus\Apka\MaksBus\dist\MaksBus'
$copyScriptPath = 'C:\Users\jakubm.ASTOR\source\repos\CordovaApp\MaksBusApp\www\scripts'
$copyStylePath = 'C:\Users\jakubm.ASTOR\source\repos\CordovaApp\MaksBusApp\www\css'

$date = Get-Date -Format G
$message = '"Update build files ' + $date + '"'

function renameAndCopyFile
{
    Param(
         $fileFilter,
         $copyPath
    )

    Get-ChildItem $buildPath -Filter $fileFilter | 
    Foreach-Object {
      $oldName = $_.FullName
      $splitName = $_.Name.split(".",[System.StringSplitOptions]::RemoveEmptyEntries)
      if($splitName.Length -gt 2){
        $newName = $splitName[0] + "." + $splitName[2]
        Rename-Item -Path $oldName -NewName $newName
        Copy-Item ($buildPath + '\' + $newName) -Destination $copyPath
      }
    
    }

 }
 
 renameAndCopyFile '*.js' $copyScriptPath
 renameAndCopyFile '*.css' $copyStylePath

 git status
 git add ../www/css/styles.css
 git add ../www/scripts/main.js
 git add ../www/scripts/polyfills.js
 git add ../www/scripts/runtime.js

 git commit -m $message
 git push
