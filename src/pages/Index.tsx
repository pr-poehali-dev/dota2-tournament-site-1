import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const teams = [
    { name: 'Team Spirit', region: 'EU', rank: 1, logo: 'https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/7625d633-a9bd-4905-95bb-c35ab17896fd.jpg' },
    { name: 'OG Esports', region: 'EU', rank: 2, logo: 'https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/7625d633-a9bd-4905-95bb-c35ab17896fd.jpg' },
    { name: 'PSG.LGD', region: 'CN', rank: 3, logo: 'https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/7625d633-a9bd-4905-95bb-c35ab17896fd.jpg' },
    { name: 'Evil Geniuses', region: 'NA', rank: 4, logo: 'https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/7625d633-a9bd-4905-95bb-c35ab17896fd.jpg' },
    { name: 'Tundra Esports', region: 'EU', rank: 5, logo: 'https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/7625d633-a9bd-4905-95bb-c35ab17896fd.jpg' },
    { name: 'Thunder Awaken', region: 'SA', rank: 6, logo: 'https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/7625d633-a9bd-4905-95bb-c35ab17896fd.jpg' },
  ];

  const rules = [
    { title: 'Формат турнира', description: 'Двойная элиминация с bo3/bo5 матчами', icon: 'Trophy' },
    { title: 'Патч', description: 'Турнир проводится на актуальном патче 7.35', icon: 'FileText' },
    { title: 'Драфт', description: 'Captains Mode с таймаутами', icon: 'Users' },
    { title: 'Регламент', description: 'Соблюдение турнирного кодекса обязательно', icon: 'Shield' },
  ];

  const prizes = [
    { place: '1 место', amount: '500,000$', color: 'from-yellow-500 to-yellow-700' },
    { place: '2 место', amount: '250,000$', color: 'from-gray-300 to-gray-500' },
    { place: '3 место', amount: '125,000$', color: 'from-orange-600 to-orange-800' },
    { place: '4 место', amount: '75,000$', color: 'from-red-900 to-red-950' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">DOTA 2 CHAMPIONSHIP</h1>
            </div>
            <div className="flex gap-4">
              {['home', 'teams', 'rules', 'prizes'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(section)}
                  className="capitalize"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'teams' && 'Участники'}
                  {section === 'rules' && 'Правила'}
                  {section === 'prizes' && 'Призы'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/712c2005-dd60-4cf6-b3bf-a0f338a469ec.jpg" 
            alt="Tournament" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-bold mb-4 text-primary">МЕЖДУНАРОДНЫЙ ТУРНИР</h2>
            <p className="text-2xl text-muted-foreground">Битва лучших команд мира</p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/50">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-center mb-8">До начала турнира</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Дней', value: timeLeft.days },
                    { label: 'Часов', value: timeLeft.hours },
                    { label: 'Минут', value: timeLeft.minutes },
                    { label: 'Секунд', value: timeLeft.seconds },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">{item.value.toString().padStart(2, '0')}</div>
                      <div className="text-muted-foreground uppercase text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm hover-scale transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">16 команд</h3>
                <p className="text-muted-foreground">Лучшие из лучших</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm hover-scale transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="DollarSign" size={48} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">$1,000,000</h3>
                <p className="text-muted-foreground">Призовой фонд</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm hover-scale transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">14 дней</h3>
                <p className="text-muted-foreground">Эпичных сражений</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="teams" className="min-h-screen py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Участники турнира</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Лучшие команды со всего мира</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <Card key={index} className="group hover-scale transition-all bg-card border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={team.logo} 
                      alt={team.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{team.name}</h3>
                      <Badge variant="secondary" className="mt-1">{team.region}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">#{team.rank}</div>
                      <div className="text-xs text-muted-foreground">Рейтинг</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Trophy" size={16} />
                    <span>Предыдущие победы: {Math.floor(Math.random() * 5) + 1}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Правила турнира</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Регламент и условия проведения</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rules.map((rule, index) => (
              <Card key={index} className="bg-card hover-scale transition-all border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name={rule.icon as any} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                      <p className="text-muted-foreground">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="AlertCircle" size={24} className="text-primary" />
                Дополнительная информация
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Все участники должны быть зарегистрированы за 48 часов до начала</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Использование запрещенного ПО приведет к дисквалификации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Все матчи транслируются в прямом эфире</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Решения судей являются окончательными</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prizes" className="min-h-screen py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Призовой фонд</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Награды для победителей</p>

          <div className="max-w-2xl mx-auto mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/d55c96ab-9ff5-46bf-9afa-2058aa5f3edb/files/ed580508-e506-4ad6-9090-b528d2e97c28.jpg"
              alt="Trophy"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {prizes.map((prize, index) => (
              <Card key={index} className="overflow-hidden hover-scale transition-all">
                <div className={`h-2 bg-gradient-to-r ${prize.color}`} />
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <Icon name="Award" size={48} className="text-primary mx-auto" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{prize.place}</h3>
                  <p className="text-4xl font-bold text-primary">{prize.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto bg-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Общий призовой фонд</h3>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                $1,000,000
              </div>
              <p className="text-muted-foreground">
                Распределение призовых среди топ-16 команд
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Trophy" size={24} className="text-primary" />
            <span className="text-xl font-bold">DOTA 2 CHAMPIONSHIP</span>
          </div>
          <p className="text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
