

import { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Users from './Users';

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);

  return (
    <div className="min-h-screen flex bg-gray-700">
      <div className="w-1/3 p-4">
        <Users users={users} setusers={setusers} />
      </div>
      <div className="w-2/3 flex items-center justify-center">
        {toggler ? (
          <Signin 
            setusers={setusers}
            users={users}
            toggler={toggler} 
            settoggler={settoggler} 
          />
        ) : (
          <Signup  
            users={users}
            setusers={setusers}
            toggler={toggler}
            settoggler={settoggler} 
          />
        )}
      </div>
    </div>
  );
};

export default App; 
