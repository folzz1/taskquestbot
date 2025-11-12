import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


const surface = 'var(--tg-secondary-bg, #ffffff)'
const text = 'var(--tg-text, #111111)'
const muted = 'var(--tg-hint, #6b7280)'

export default function MainPage({ onNavigate }) {
    return (
        <div style={{ display: 'grid', gap: 16 }}>
            {/* Дата — компактный бейдж */}
            <div
                style={{
                    display: 'inline-block',
                    alignSelf: 'center',
                    background: surface,
                    color: text,
                    borderRadius: 14,
                    padding: '10px 16px',
                    fontSize: 18,
                    fontWeight: 600,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.06)',
                }}
            >
                09.11.2025
            </div>

            {/* Карточка дел на сегодня */}
            <div
                style={{
                    background: surface,
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 16,
                    padding: 16,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                }}
            >
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: text }}>
                    Дела на сегодня
                </div>
                <ol
                    style={{
                        margin: 0,
                        paddingLeft: 20,
                        display: 'grid',
                        rowGap: 6,
                        color: text,
                        lineHeight: 1.4,
                        fontSize: 14,
                    }}
                >
                    <li>бегат ываываыва</li>
                    <li>CBO</li>
                    <li>хзхзхзхзхзхз</li>
                </ol>
                <div style={{ marginTop: 8, fontSize: 12, color: muted }}>Всего: 3</div>
            </div>

            {/* Кнопки */}
            <div style={{ display: 'grid', gap: 10, paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)' }}>
                <Button className="h-12 rounded-xl" onClick={() => onNavigate('calendar')}>
                    Календарь
                </Button>
                <Button className="h-12 rounded-xl" variant="outline" onClick={() => onNavigate('achievements')}>
                    Достижения
                </Button>
            </div>
        </div>
    )
}