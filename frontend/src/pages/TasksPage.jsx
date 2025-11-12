import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TasksPage({ onNavigate }) {
    return (
        <Card className="w-96 p-4 space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">13.12.2025</h3>
                <Button size="sm" variant="outline" onClick={() => onNavigate('main')}>←</Button>
            </div>
            {[1,2].map(i => (
                <div key={i} className="border rounded-md p-2">
                    <Input placeholder="Тип дела" className="mb-2" />
                    <Input placeholder="Название" className="mb-2" />
                    <textarea placeholder="Краткое описание" className="w-full border rounded-md p-2 text-sm" rows={3}></textarea>
                </div>
            ))}
        </Card>
    )
}