import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            type="button"
        >
            {t('Язык')}
        </Button>
    );
};
