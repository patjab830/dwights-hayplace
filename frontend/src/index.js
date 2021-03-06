document.addEventListener('DOMContentLoaded', () => {

<<<<<<< HEAD
=======
  let id = 7;

>>>>>>> master
  const adapter = new Adapter()
  let currentUser
  let currentMaze
  let currentMazeUser

  // CREATE USERNAME FORM
  const gridContainerInitEl = document.querySelector(".grid-container")
  const signInFormEl = document.createElement("form")
  signInFormEl.setAttribute("id", "login")

  const usernameTextfieldEl = document.createElement("input")
  usernameTextfieldEl.setAttribute("type", "text")
  usernameTextfieldEl.setAttribute("id", "username")

  const submitButtonEl = document.createElement("input")
  submitButtonEl.setAttribute("type", "submit")

  signInFormEl.appendChild(usernameTextfieldEl)
  signInFormEl.appendChild(submitButtonEl)

  gridContainerInitEl.appendChild(signInFormEl)

  signInFormEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = e.target.username.value
    gridContainerInitEl.removeChild(signInFormEl)

    // LATER WE CAN CHANGE THIS TO CREATE OR FIND USERNAME WHEN WE HAVE SESSIONS AVAILABLE
    adapter.createUser({user: {username: username}}).then(data => {
      currentUser = new User(data)
      // ASK FOR LEVEL OF DIFFICULTY
      const levelFormEl = document.createElement("form")
      levelFormEl.setAttribute("id", "difficultyLevel")

      const selectLevelEl = document.createElement("select")
      selectLevelEl.setAttribute("id", "level")

      adapter.getMazes().then(data => {
        // APPENDING THE FORM
        data.forEach((maze) => {
          const difficultyOptionEl = document.createElement("option")
          difficultyOptionEl.setAttribute("value", maze.id)
          difficultyOptionEl.innerHTML = maze.difficulty
          selectLevelEl.appendChild(difficultyOptionEl)
        })
        const submitLevelEl = document.createElement("input")
        submitLevelEl.setAttribute("type", "submit")

        levelFormEl.appendChild(selectLevelEl)
        levelFormEl.appendChild(submitLevelEl)
        gridContainerInitEl.appendChild(levelFormEl)

        levelFormEl.addEventListener('submit', (e) => {
          e.preventDefault()
          const id = e.target.level.value
          gridContainerInitEl.removeChild(levelFormEl)

          adapter.getMaze(id).then((data) => {
            currentMaze = new Maze(data)
            MazeController.renderMaze(currentMaze.size)
            adapter.createMazeUser({maze_user: {user_id: currentUser.id, maze_id: id}})
            .then(mazeUser => {
              console.log(mazeUser)
              currentMazeUser = new MazeUser(mazeUser)
              console.log("currentMazeUser is: ", currentMazeUser)
              currentMazeUser.renderMaze()

<<<<<<< HEAD
              CharacterController.renderKevin(currentMaze)

              const startTime = Date.now()
              let timeout = setTimeout(function() {}, 120 * 1000);

              const timeAllowed = 2000

              setTimeout(() => {
                adapter.getMazeUser(id).then((data) => {
                  if (data.finished_time === null ) {
                    const gridContainerEl = document.querySelector(".grid-container")
                    gridContainerEl.innerHTML = ""
                    const videoEl = document.createElement("video")
                    videoEl.setAttribute("width", "auto")
                    videoEl.setAttribute("height", "auto")
                    videoEl.setAttribute("id", "loserVideo")
                    videoEl.setAttribute("autoplay", "true")

                    const sourceEl = document.createElement("source")
                    sourceEl.setAttribute("src", "media/loser.mp4")
                    sourceEl.setAttribute("id", "loserVideoSrc")
                    sourceEl.setAttribute("type", "video/mp4")
                    videoEl.appendChild(sourceEl)
                    gridContainerEl.appendChild(videoEl)
                  }
                })
              }, timeAllowed)

              const timerEl = document.querySelector(".timer")
              setInterval(() => {
                if (Math.floor((timeAllowed-(Date.now()-startTime))/1000) >= 0) {
                  timerEl.innerHTML = `<h1>${Math.floor((timeAllowed-(Date.now()-startTime))/1000)} second remain</h1>`
                }
              }, 500)

              document.addEventListener('keydown', (e) => {
                e.preventDefault()
                console.log("CURR MAZE USER:", currentMazeUser)
                let coordinate;
                if ( e.key === "ArrowLeft" ) {
                  coordinate = {row: currentMazeUser.playersCurrentRow, col: currentMazeUser.playersCurrentCol-1}
                } else if ( e.key === "ArrowRight" ) {
                  coordinate = {row: currentMazeUser.playersCurrentRow, col: currentMazeUser.playersCurrentCol+1}
                } else if ( e.key === "ArrowUp" ) {
                  coordinate = {row: currentMazeUser.playersCurrentRow-1, col: currentMazeUser.playersCurrentCol}
                } else if ( e.key === "ArrowDown" ) {
                  coordinate = {row: currentMazeUser.playersCurrentRow+1, col: currentMazeUser.playersCurrentCol}
                }

                console.log("COORD: ", coordinate)
                console.log(currentMazeUser.nothingExistsAt(coordinate))
                console.log(currentMazeUser.staysInMaze(coordinate))
                if (currentMazeUser.nothingExistsAt(coordinate) && currentMazeUser.staysInMaze(coordinate)) {
                  const oldPlayerPositionDivEl = document.querySelector("#player")
                  oldPlayerPositionDivEl.parentNode.removeChild(oldPlayerPositionDivEl)

                  currentMazeUser.playersCurrentRow = coordinate.row
                  currentMazeUser.playersCurrentCol = coordinate.col

                  currentMazeUser.renderPlayer()
                  currentMazeUser.playerFinish(startTime)
                } else {
                  const soundEl = document.createElement("audio")
                  soundEl.src = "./media/idiot.mp3"
                  document.body.appendChild(soundEl)
                  soundEl.play()

                }
              })


            })
          })
        })
      })
=======
  adapter.getMaze(id).then((data) => {
    const maze = new Maze(data)
    MazeController.renderMaze(maze.size)

    maze.renderMaze()
    CharacterController.renderKevin(maze)

    const startTime = Date.now()
    let timeout = setTimeout(function() {}, 120 * 1000);

    const timeAllowed = 30000

    setTimeout(() => {
      adapter.getMaze(id).then((data) => {
        console.log(data)
        if (data.finished_time === null ) {
          const gridContainerEl = document.querySelector(".grid-container")
          gridContainerEl.innerHTML = ""
          const videoEl = document.createElement("video")
          videoEl.setAttribute("width", "auto")
          videoEl.setAttribute("height", "auto")
          videoEl.setAttribute("id", "loserVideo")
          videoEl.setAttribute("autoplay", "true")

          const sourceEl = document.createElement("source")
          sourceEl.setAttribute("src", "media/loser.mp4")
          sourceEl.setAttribute("id", "loserVideoSrc")
          sourceEl.setAttribute("type", "video/mp4")
          videoEl.appendChild(sourceEl)
          gridContainerEl.appendChild(videoEl)
        }
      })
    }, timeAllowed);

    const timerEl = document.querySelector(".timer")
    setInterval(() => {
      if (Math.floor((timeAllowed-(Date.now()-startTime))/1000) >= 0) {
        timerEl.innerHTML = `<h1 class='time-font'>${Math.floor((timeAllowed-(Date.now()-startTime))/1000)} second(s) remain</h1>`
      }
    }, 500)

    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      let coordinate;
      if ( e.key === "ArrowLeft" ) {
        coordinate = {row: maze.playersCurrentRow, col: maze.playersCurrentCol-1}
      } else if ( e.key === "ArrowRight" ) {
        coordinate = {row: maze.playersCurrentRow, col: maze.playersCurrentCol+1}
      } else if ( e.key === "ArrowUp" ) {
        coordinate = {row: maze.playersCurrentRow-1, col: maze.playersCurrentCol}
      } else if ( e.key === "ArrowDown" ) {
        coordinate = {row: maze.playersCurrentRow+1, col: maze.playersCurrentCol}
      }
      if (maze.nothingExistsAt(coordinate) && maze.staysInMaze(coordinate)) {
        const oldPlayerPositionDivEl = document.querySelector("#player")
        oldPlayerPositionDivEl.parentNode.removeChild(oldPlayerPositionDivEl)

        maze.playersCurrentRow = coordinate.row
        maze.playersCurrentCol = coordinate.col

        maze.renderPlayer()
        maze.playerFinish(startTime)
      } else {
        const soundEl = document.createElement("audio")
        soundEl.src = "./media/idiot.mp3"
        document.body.appendChild(soundEl)
        soundEl.play()

      }
>>>>>>> master
    })
  })
})
