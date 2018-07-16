
$buildPath = 'C:\Users\jakubm.ASTOR\Desktop\MaxBus\Apka\MaksBus\dist\MaksBus'
$copyScriptPath = 'C:\Users\jakubm.ASTOR\source\repos\CordovaApp\MaksBusApp\www\scripts'
$copyStylePath = 'C:\Users\jakubm.ASTOR\source\repos\CordovaApp\MaksBusApp\www\css'

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
      $newName = $splitName[0] + "." + $splitName[2]
      Rename-Item -Path $oldName -NewName $newName
      Copy-Item ($buildPath + '\' + $newName) -Destination $copyPath
    }

 }
 
 renameAndCopyFile '*.js' $copyScriptPath
 renameAndCopyFile '*.css' $copyStylePath

 git status
 git add ../www/css/styles
 git add ../www/scripts/main
 git add ../www/scripts/polyfills
 git add ../www/scripts/runtime

 git commit -m "Update build files"
 git push
