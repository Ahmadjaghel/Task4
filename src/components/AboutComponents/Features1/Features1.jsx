import React from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";

const Features1 = () => {
  return (
    <div>
      <div className="container d-flex flex-column flex-sm-row gap-3">
        <img src="/imgs/about.jpg" className="w-40 align-self-sm-stretch" />
        <div>
          <h4>
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            perspiciatis veniam minus voluptate doloribus, similique ut ipsam
            nemo debitis recusandae porro molestias modi autem facere atque.
            Tempore sunt quos voluptatem.
          </p>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-start gap-2">
              <LiaCheckDoubleSolid size={18} className="text-maincolor" />
              <p className="m-0">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
            <div className="d-flex align-items-start gap-2">
              <LiaCheckDoubleSolid size={18} className="text-maincolor" />
              <p className="m-0">
                Duis aute irure dolor in reprehenderit in voluptate velit
              </p>
            </div>
            <div className="d-flex align-items-start gap-2">
              <LiaCheckDoubleSolid size={24} className="text-maincolor" />
              <p className="m-0">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </div>

            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
              irure dolor in reprehenderit in voluptate velit.Excepteur sint
              occaecat cupidatat non proident
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features1;
