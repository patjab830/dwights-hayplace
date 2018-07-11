class Maze {
  constructor(maze) {
    this.side = maze.side // this is the length of one side of the square maze
    this.characters = maze.characters // from the has_many relationships that Maze has
    this.hayPatches = maze.hayPatches // from the has_many relationships that Maze has
  }

  // Goes through all the characters and the hayPatches in the given JSON and
  // assembles a two dimensional array with references to characters and hayPatches
  // inside the appropriate array slot
  renderMazeAs2DArray() {

  }

  // Uses renderMazeAs2DArray to determine if a character exists at the given
  // coordinate
  characterExistsAt(coordinate) {

  }

  // Uses renderMazeAs2DArray to determine if a character exists at the given
  // coordinate
  obstacleExistsAt(coordinate) {

  }

  // Uses characterExistsAt(coordinate) and obstacleExistsAt(coordinate) to
  // determine if something exists at the given coordinate. Returns boolean
  somethingExistsAt(coordinate) {
    return characterExistsAt(coordinate) || obstacleExistsAt(coordinate)
  }

  // Returns whatever exists at the given coordinate
  componentAt(coordinate) {
    return renderMazeAs2DArray()[row][col]
  }

  // Gets all the spots which are not occupied
  allUnoccupiedPositions() {
    const unoccupiedPositions = []
    for (let row = 0; row < this.size; row++ ) {
      for (let col = 0; col < this.size; col++ ) {
        somethingExistsAt({row: row, col: col}) ? null: unoccupiedPositions.push({row: row, col: col})
      }
    }
    return unoccupiedPositions
  }

}
