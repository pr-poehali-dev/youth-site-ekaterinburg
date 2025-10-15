import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const news = [
    {
      id: 1,
      title: 'Молодежный форум «Точка роста» объединил более 300 участников',
      date: '15 марта 2024',
      category: 'Мероприятия',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
    },
    {
      id: 2,
      title: 'Стартовал прием заявок на конкурс молодежных инициатив',
      date: '10 марта 2024',
      category: 'Конкурсы',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800'
    },
    {
      id: 3,
      title: 'Открыта регистрация волонтеров на городские события',
      date: '5 марта 2024',
      category: 'Волонтерство',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Образовательная программа «Лидеры будущего»',
      date: '20-22 апреля 2024',
      time: '10:00',
      location: 'Городской молодежный центр',
      type: 'Обучение'
    },
    {
      id: 2,
      title: 'Городской слет молодежных советов',
      date: '15 мая 2024',
      time: '14:00',
      location: 'Администрация города',
      type: 'Форум'
    },
    {
      id: 3,
      title: 'Спортивный фестиваль «Молодость в движении»',
      date: '1 июня 2024',
      time: '11:00',
      location: 'Центральный стадион',
      type: 'Спорт'
    }
  ];

  const documents = [
    { id: 1, title: 'Положение о молодежной администрации', date: '01.02.2024' },
    { id: 2, title: 'План работы на 2024 год', date: '15.01.2024' },
    { id: 3, title: 'Отчет о деятельности за 2023 год', date: '25.12.2023' },
    { id: 4, title: 'Порядок приема в молодежную администрацию', date: '10.12.2023' }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600',
    'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
    'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 font-secon">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Icon name="Building2" size={32} className="text-primary" />
              <div>
                <h1 className="font-larrea font-bold text-lg text-primary">МОЛОДЕЖНАЯ АДМИНИСТРАЦИЯ</h1>
                <p className="text-xs text-muted-foreground">г. Екатеринбург</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('main')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('news')} className="text-sm font-medium hover:text-primary transition-colors">Новости</button>
              <button onClick={() => scrollToSection('events')} className="text-sm font-medium hover:text-primary transition-colors">Мероприятия</button>
              <button onClick={() => scrollToSection('documents')} className="text-sm font-medium hover:text-primary transition-colors">Документы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Галерея</button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="main" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-blue-800 opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
              <h2 className="font-larrea font-bold text-5xl md:text-6xl mb-6">
                Молодежная администрация города Екатеринбурга
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-50">
                Платформа для реализации инициатив молодежи и развития лидерского потенциала
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
                  <Icon name="Users" size={20} className="mr-2" />
                  Вступить в команду
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-larrea font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">О нас</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Наша миссия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Создание условий для самореализации молодежи и участия в управлении городом</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <CardTitle>Наши задачи</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Реализация молодежных инициатив и развитие лидерских качеств участников</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Award" size={24} className="text-accent" />
                    </div>
                    <CardTitle>Наши ценности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Активность, ответственность, сотрудничество и профессиональное развитие</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h3 className="font-larrea font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">Новости</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {news.map((item, index) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="font-larrea font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">Мероприятия</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-primary">{event.type}</Badge>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <div className="flex flex-col gap-2 mt-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Calendar" size={16} className="text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Clock" size={16} className="text-primary" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="MapPin" size={16} className="text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                      <Button className="bg-secondary hover:bg-secondary/90">
                        Зарегистрироваться
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="documents" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h3 className="font-larrea font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">Документы</h3>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon name="FileText" size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.title}</p>
                            <p className="text-sm text-muted-foreground">{doc.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="font-larrea font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">Галерея</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {gallery.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <img src={image} alt={`Галерея ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-16 bg-gradient-to-br from-primary to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h3 className="font-larrea font-bold text-3xl md:text-4xl text-center mb-12">Контакты</h3>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Адрес</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-white mt-1" />
                    <p className="text-white/90">г. Екатеринбург, пр. Ленина, 24а, каб. 315</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-white mt-1" />
                    <p className="text-white/90">+7 (343) 371-35-68</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-white mt-1" />
                    <p className="text-white/90">molodadm@ekadm.ru</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Часы работы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">Понедельник - Четверг</span>
                    <span className="text-white font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">Пятница</span>
                    <span className="text-white font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">Суббота, Воскресенье</span>
                    <span className="text-white font-medium">Выходной</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="max-w-4xl mx-auto mt-8 text-center">
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  VK
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2024 Молодежная администрация города Екатеринбурга. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
