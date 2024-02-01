import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
const { change: currentChange, locale: currentLocale } = this.props;
const { change: nextChange, locale: nextLocale } = nextProps;
if (currentChange === nextChange && nextLocale === currentLocale) {
    return false;
}
    return true;
    }

    render() {
        const {
 change, locale, show, enable,
} = this.props;
// dome asbei na. rendern call hbe na  but shbgulo life circle call hbe
if (!enable) return null;
        return (
          <>
            <button type="button" onClick={() => change(locale)}>
              {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
            </button>

            {show && (
            <p>
              Bangladesh time
            </p>
)}
          </>
        );
}
}
export default Button;
