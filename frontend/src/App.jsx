import { useState } from 'react'
import MainPage from './pages/MainPage.jsx'
import CalendarPage from './pages/CalendarPage'
import TasksPage from './pages/TasksPage'
import AchievementsPage from './pages/AchievementsPage'


export default function App() {
    const [page, setPage] = useState('main')

    const navigate = (to) => setPage(to)

    return (
        <div className="min-h-[100svh] bg-gray-50 flex justify-center">
            <main className="w-full max-w-[420px] p-4">
                {page === 'main' && <MainPage onNavigate={navigate} />}
                {page === 'calendar' && <CalendarPage onNavigate={navigate} />}
                {page === 'tasks' && <TasksPage onNavigate={navigate} />}
                {page === 'achievements' && <AchievementsPage onNavigate={navigate} />}
            </main>
        </div>
    )
}