import { Suspense } from "react"
import TasksPage from "./features/tasks/pages/tasksPage"

function App() {
  return (
    <div className="min-h-screen bg-grey-100 flex items-center justify-center p-6">
      <Suspense fallback={<div>Loading TaskFlow...</div>}>
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">TaskFlow 🚀</h1>
          <TasksPage/>
        {/* Lazy import soon, for now direct import */}
        </div>
      </Suspense>
    </div>
  )
}

export default App
