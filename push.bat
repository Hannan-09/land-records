@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
echo ==============================================
echo   Pushing Land Records to GitHub & Vercel
echo ==============================================
git add .
set /p msg="Enter commit message (or press enter for default): "
if "%msg%"=="" set msg=Update records and portal
git commit -m "%msg%"
git push -u origin main
echo ==============================================
echo   Done! Vercel will auto-deploy in ~30 seconds.
echo ==============================================
pause
