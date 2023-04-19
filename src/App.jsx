import { IconBrandAws, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {
    // const ini punya Sign In AWS (contoh case lain)
    const type = 'submit';
    const onClick = () => console.log('Ini Sign In AWS');
    const className = 'bg-orange-600';
    //const diatas punya Sign In AWS

    const data = [
        {
            id: 1,
            name: 'AWS',
            buttonTitle: 'Sign In AWS',
        },
        {
            id: 2,
            name: 'Google',
            buttonTitle: 'Sign In Google',
        },
        {
            id: 3,
            name: 'Alibaba',
            buttonTitle: 'Sign In Alibaba',
        },
    ];

    return (
        <div className={'bg-slate-900 flex items-center justify-center flex-col min-h-screen'}>
            <div className={'grid grid-cols-3 gap-4 max-w-2xl mx-auto'}>
                <Card>
                    <Card.Title>Hellow Lorem</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dolorum rerum dolor.</Card.Body>
                    <Card.Footer>
                        <Button>Button Doang</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hellow Lorem</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dolorum rerum dolor.</Card.Body>
                    <Card.Footer>
                        <Button>Button Doang</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hellow Lorem</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dolorum rerum dolor.</Card.Body>
                    <Card.Footer>
                        <Button>Button Doang</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hellow Lorem</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dolorum rerum dolor.</Card.Body>
                    <Card.Footer>
                        <Button>Button Doang</Button>
                    </Card.Footer>
                </Card>
            </div>
            <div className={'flex gap-x-2 mt-2'}>
                <Button className={'bg-black'} onClick={() => console.log('Ini Register')} type='reset'>
                    <IconBrandGithub />
                    Register
                </Button>
                <Button
                    // className={'bg-blue-600'}
                    onClick={() => console.log('Ini Login')}
                    type='submit'>
                    <IconBrandTwitter />
                    Login
                </Button>

                {/* yang di bawah merupakan jika value dan properties nya sama */}
                <Button
                    {...{
                        type,
                        onClick,
                        className,
                    }}>
                    <IconBrandAws />
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default App;

//menggunkan ES 6
