const colums = ["Todo", "Doing", "Done"]

export default function TasksPage() {
    return (
    <div className="w-full space-y-6">
      {/* Header / Action Area */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Tasks</h2>
        <button
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          + Add Task
        </button>
      </div>

      {/* Board Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {colums.map((col) => (
          <div
            key={col}
            className="bg-white rounded-2xl shadow p-4 min-h-[300px] flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-3">{col}</h3>
            <div className="flex-1 border border-dashed rounded-lg p-3 text-gray-400 text-sm flex items-center justify-center">
              Empty
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}