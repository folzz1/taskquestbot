import { useMemo, useState } from 'react'
import { Button } from '../components/ui/button'

const RU_MONTHS = [
    'Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
]
const RU_WEEKDAYS = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'] // понедельник — первый

// utils
const startOfMonth = d => new Date(d.getFullYear(), d.getMonth(), 1)
const endOfMonth   = d => new Date(d.getFullYear(), d.getMonth() + 1, 0)
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x }
const sameDay = (a,b) =>
    a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate()

function buildMonthMatrix(viewDate) {
    const first = startOfMonth(viewDate)
    const last  = endOfMonth(viewDate)
    const monIndex = (first.getDay() + 6) % 7 // 0..6 (ПН..ВС)
    const gridStart = addDays(first, -monIndex)

    const cells = []
    for (let i = 0; i < 42; i++) {
        const d = addDays(gridStart, i)
        cells.push({ date: d, inMonth: d.getMonth() === viewDate.getMonth() })
    }
    return cells
}

export default function CalendarPage({ onNavigate }) {
    const today = useMemo(() => { const t = new Date(); t.setHours(0,0,0,0); return t }, [])
    const [viewDate, setViewDate] = useState(today)

    const cells = useMemo(() => buildMonthMatrix(viewDate), [viewDate])
    const monthLabel = `${RU_MONTHS[viewDate.getMonth()]} ${viewDate.getFullYear()}`

    const openDay = (date) => {
        const d = new Date(date); d.setHours(0,0,0,0)
        sessionStorage.setItem('selectedDate', d.toISOString())
        onNavigate('tasks') // позже заменим на страницу дня
    }

    const styles = {
        page: { display: 'grid', gap: 12 },
        headerRow: {
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: 'var(--safe-top, 0px)'
        },
        headerCenter: { display: 'flex', alignItems: 'center', gap: 8 },
        monthTitle: { minWidth: 180, textAlign: 'center', fontWeight: 600, fontSize: 16 },
        weekdays: {
            display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
            textAlign: 'center', fontSize: 12, opacity: 0.7
        },
        monthGrid: {
            display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8
        },
        dayCell: {
            height: 44, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--tg-secondary-bg, #1e1e1e)',
            color: 'var(--tg-text, #fff)', cursor: 'pointer'
        },
        dayCellFaded: { opacity: 0.45 },
        dayCellToday: {
            borderColor: '#2563eb', color: '#2563eb',
            background: 'rgba(37,99,235,0.08)', fontWeight: 600
        },
        wrap: { width: '100%', maxWidth: 420, margin: '0 auto' }
    }

    return (
        <div style={styles.wrap}>
            <div style={styles.page}>
                {/* шапка: ← Назад | ‹ Месяц › | Сегодня */}
                <div style={styles.headerRow}>
                    <Button variant="outline" onClick={() => onNavigate('main')}>← Назад</Button>

                    <div style={styles.headerCenter}>
                        <Button variant="outline" onClick={() =>
                            setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
                        }>‹</Button>

                        <div style={styles.monthTitle}>{monthLabel}</div>

                        <Button variant="outline" onClick={() =>
                            setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
                        }>›</Button>
                    </div>

                    <Button variant="ghost" onClick={() => setViewDate(today)}>Сегодня</Button>
                </div>

                {/* заголовки дней недели */}
                <div style={styles.weekdays}>
                    {RU_WEEKDAYS.map(d => <div key={d} style={{ padding: '4px 0' }}>{d}</div>)}
                </div>

                {/* сетка месяца 6×7 */}
                <div style={styles.monthGrid}>
                    {cells.map(({ date, inMonth }) => {
                        const isToday = sameDay(date, today)
                        const style = {
                            ...styles.dayCell,
                            ...(inMonth ? {} : styles.dayCellFaded),
                            ...(isToday ? styles.dayCellToday : {})
                        }
                        return (
                            <button
                                key={date.toISOString()}
                                onClick={() => openDay(date)}
                                style={style}
                                aria-label={date.toDateString()}
                            >
                                {date.getDate()}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}