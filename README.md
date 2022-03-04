# Problem
This is a mmvp to show a problem where extensions get shuffled around when changing a route

# Repro steps
1. Clone the Repo
2. `npm run build` the app-shell
3. `dotnet build` the cloud-layout
4. `dotnet build` the dashboard
5. `npm start` the dasboard (whick will also load the cloud-layout)
6. Go to /dashboard and reload the page
7. Click the About Link in the sidebar and see what happens

# See Video
https://wetransfer.com/downloads/5e4ffaeb3b4a81c25c14c6db892e737a20220304110300/8d9c982d6a6a9781e4410b8d1477263920220304110321/586815 