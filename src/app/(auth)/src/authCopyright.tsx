'use client'
import React from 'react';


const AuthCopyright: React.FC = () => {
    return (
        <>
            <div className='text-xs text-center px-6'>
                <p className='text-zinc-500'>
                    © 2024 BRH Reklam. Tüm hakları saklıdır. İzinsiz erişim veya kullanım yasaktır. Bu uygulama BRH Reklam ve yetkili temsilcileri tarafından işletilmektedir.
                </p>
                <br />

                <p className='text-gray-500 hidden'>
                    Bu hizmete erişerek Kullanım Koşullarımızı kabul etmiş olursunuz ve Gizlilik Politikamızı kabul ettiğinizi beyan etmiş olursunuz. Daha fazla bilgi için web sitemizi ziyaret edin: www.brhreklam.com
                </p>

                <p className='text-gray-500 hidden'>
                    Destek veya sorularınız için lütfen bize ulaşın:
                    <br />
                    E-posta: support@brhreklam.com
                    <br />
                    Telefon: +90 216 324 28 80
                </p>
            </div>
        </>
    )
}

export default AuthCopyright;