import React from 'react'
import MainLayout from '../layouts/MainLayout';

const Home = () => {
    return (
      <MainLayout>
        <header class="bg-light py-2">
          <div class="container px-10 px-lg-4 my-4">
            <div class="text-center text-secondary">
              <h5 class="display-6 fw-bolder">SWEET THREE BAKERY </h5>
              <p class="lead fw-normal text-secondary-50 mb-0" className='bgtext'>
                <i class="bi bi-flower3"></i>
                Welcome to the Sweet Three bakery course
                <i class="bi bi-flower3"></i>
              </p>
            </div>
          </div>
        </header>
        <div class="row">
        <img src="images/หน้าเพจ.jpg" width="500" height="600" alt="หน้าเพจ"  />
        <br />
        <h4 className="mt-3">Course </h4>
        <br />
        <img src="images/คอ.jpg" width="500" height="600" alt="คอ"  />
        <br />
        <h4 className="mt-3">𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻</h4>
        <br />
        <img src="images/โลเคชั่น.jpg"width="500" height="600" alt="โลเคชั่น"/>
        <hr />
        </div>
        <footer>
    <div class="text-center p-3">
      © 2024 Copyright:
      <a class="text-body" href="">SWEET THREE BAKERY</a>
    </div>
  </footer>
  
      </MainLayout>
    );
  };
  
  export default Home;