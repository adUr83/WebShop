import React from 'react'
import Footer from "react-footer-comp";
export default function Footers() {
    return (
        <div>
            <h1> Welcome to Adem Web Shop</h1>
    <h2>You can buy any film you want{"\u2728"}</h2>
    <Footer
      copyrightIcon
      years={[2012]}
      height={150}
      bgColor={"orangered"}
      copyrightText
      copyrightIconStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      copyrightTextStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      textStyle={{ color: "yellow", fontSize: 16, marginRight: 10 }}
      text={"All rights reserved."}
    />
        </div>
    )
}
