import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


export default function MainPage({ onNavigate }) {
    return (
        <Card className="w-80 p-4 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">09.11.2025</h2>
            <div className="w-full border rounded-md p-2 text-left mb-4">
                <p className="text-sm">Дела на сегодня: 3</p>
                <ol className="text-xs mt-2 list-decimal list-inside">
                    <li>бегат ываываыва</li>
                    <li>CBO</li>
                    <li>хзхзхзхзхзхз</li>
                </ol>
            </div>
            <Button className="mb-2 w-full" onClick={() => onNavigate('calendar')}>Календарь</Button>
            <Button className="w-full" onClick={() => onNavigate('achievements')}>Достижения</Button>
        </Card>
    )
}