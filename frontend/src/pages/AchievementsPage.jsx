import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from '@/components/ui/star'


export default function AchievementsPage({ onNavigate }) {
    return (
        <Card className="w-80 p-4 text-center">
            <h3 className="font-semibold mb-4">Очки: 1488</h3>
            <div className="flex flex-col items-center space-y-4">
                {[1,2].map(i => (
                    <div key={i} className="w-full flex justify-center items-center border p-3 rounded-md">
                        <Star className="w-6 h-6 mx-2" />
                        <Star className="w-6 h-6 mx-2" />
                    </div>
                ))}
            </div>
            <Button className="mt-4 w-full" onClick={() => onNavigate('main')}>Назад</Button>
        </Card>
    )
}