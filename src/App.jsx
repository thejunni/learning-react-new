import {
    IconBrandAws,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
    // const ini punya Sign In AWS (contoh case lain)
    const type = 'submit';
    const onClick = () => console.log('Ini Sign In AWS');
    const className = 'bg-orange-600';
    //const diatas punya Sign In AWS
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'flex gap-x-2'}>
                <Button
                    className={'bg-black'}
                    onClick={() => console.log('Ini Register')}
                    type='reset'
                >
                    <IconBrandGithub />
                    Register
                </Button>
                <Button
                    // className={'bg-blue-600'}
                    onClick={() => console.log('Ini Login')}
                    type='submit'
                >
                    <IconBrandTwitter />
                    Login
                </Button>

                {/* yang di bawah merupakan jika value dan properties nya sama */}
                <Button
                    {...{
                        type,
                        onClick,
                        className,
                    }}
                >
                    <IconBrandAws />
                    Sign In
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-sky-600', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-1 flex item-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {children || text}
        </button>
    );
}
