import { useEffect } from 'react';
import { Mixpanel } from '../analytics/Mixpanel';


function Login() {

    useEffect(() => {

        if(window.Intercom) {
            window?.Intercom('boot', {
                app_id: "test",
            });
        }
        
    },[])



    const loginWithMixpanel = async () => {
        try {
          const user = {
            id: Math.random().toLocaleString(),
            firstName: 'John',
            lastName: 'Doe'
          }
          Mixpanel.identify(user.id);
          Mixpanel.track('Successful login');
          Mixpanel.people.set({
            $first_name: user.firstName,
            $last_name: user.lastName,
          });
          
        } catch (exception: unknown) {
           console.log('Error', exception)
          const error = exception as string
          Mixpanel.track(error);
        }
    }; 
 
  return (
    <>
    <form onSubmit={() => loginWithMixpanel()}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login
