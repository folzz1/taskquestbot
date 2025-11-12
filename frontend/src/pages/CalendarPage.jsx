import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CalendarPage({ onNavigate }) {
    const days = ['ПН','ВТ','С','ЧТ','П','СБ','ВС']
    return (
        <Card className="w-96 p-4">
            <h3 className="text-lg font-semibold mb-3">Календарь</h3>
            <div className="grid grid-cols-7 gap-1 text-center border-t border-l">
                {days.map(d => (
                    <div key={d} className="border-r border-b py-1 text-xs font-semibold">{d}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                    <div key={i} className="border-r border-b py-3 text-sm">{i + 1}</div>
                ))}
            </div>
            <Button className="mt-4 w-full" onClick={() => onNavigate('main')}>Назад</Button>
        </Card>
    )
}