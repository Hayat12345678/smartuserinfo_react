import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SmartUserInfo.css";



export const SmartUserInfo = () => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const params = useParams();
  useEffect(() => {
    // Variante 1: Funktion definieren und später mit Namen aufrufen
    const loadTodos = async () => {
      try {
        const response = await axios.get("/users/" + params.userid + "/todos");
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (params.userid) {
      // Variante 2: Funktion als IIFE in einem Schritt definieren und aufrufen
      (async () => {
        try {
          const response = await axios.get("/users/" + params.userid);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
      loadTodos();
    }
  }, [params.userid]);
  return (
    <div className="container"> 
    {user ?(
      <>
      <h1>SmartUserInfo</h1>
      <div >Phone</div>
      <di  >Location</di>
      <div >{user?.addres?.geo?.lat} {user?.address?.geo?.lng} </div>
      <div >Company</div>
      <div >{user.company.name}</div>
      </>
    ):(
        <p>Bitte wählen Sie einen User!</p>
      )}  
      <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li className="list"
              style={{
                color: todo.completed ? "blue" : "green",
              }}
              key={`todos-${todo.id}`}
            >
              {todo.title}
            </li>
          );
        })}
      </ul> 
      </div>     
    </div>
  );
};
