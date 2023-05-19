import React from "react";
import block_pic from "../../../../assets/images/web3/1.blockchain/blocks.png";

const WhatIsBlockchain = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            src={block_pic}
            alt=""
            className="w-full h-auto border rounded-lg shadow-md"
          />
          <h1 className="h1">ব্লকচেইন কি? </h1>
          <p className="paragraph">
            সহজ কথায় বলতে গেলে ব্লকচেইন হলো distributed immutable ledger যেটা
            সম্পূর্ণ ভাবে transparent। কি? শুনতে সহজ লাগছে না তো? তাহলে একটু
            ব্যাখ্যা করা যাক।{" "}
          </p>

          <p className="paragraph">
            {" "}
            <span className="font-bold">Transparant:</span> সম্পূর্ণরূপে
            transparent বলতে বোঝানো হয়েছে যে ব্লকচেইন এর মধ্যে সংগৃহীত সকল
            ইনফরমেশন ব্লকচেইন নেটওয়ার্কে থাকা সকল পারটিসিপেন্টস দের কাছে
            উন্মুক্ত। যে কেউ এই ইনফরমেশন দেখতে পারবে,পড়তে পারবে।{" "}
          </p>
          <p className="paragraph">
            <span className="font-bold">Immutable ledger:</span> ব্লকচেইন এর
            ব্লক এর ভিতর যখন একবার যে কোন ডাটা রাখা হয়, এর পরে এটা পরিবর্তনের
            ক্ষমতা আর কারোর নেই। এমনকি যে এই ডাটা লিখেছে ব্লক এর ভিতর সেও পারবে
            না এটি পরিবর্তন করতে। ফলে যা একবার লেখা হবে সেটি ই থেকে যাবে আজীবন।
            এখানে অসম্ভব বললে একটু ভুল হবে। আসলে ব্যাপার টা এমন যে এটা পরিবর্তন
            করতে গেলে যে পরিমাণ computational power প্রয়োজন হবে সেটা
            computationally infeasible ।
          </p>
          <p className="paragraph">
            <span className="font-bold">Distributed:</span> সম্পূর্ণ ব্লক চেইন
            এর কপি নেটওয়ার্ক এ যুক্ত সকল নোড এর কাছে থাকে। এখানে সেন্ট্রাল কোন
            অথরিটি নেই।
          </p>

          <h2 className="h2">ব্লক</h2>
          <p className="paragraph">
            ব্লকচেইন এর একটি মূল অংশ হলো ব্লক। ব্লক কে আমরা একটি কাচের বক্স এর
            সাথে তুলনা করতে পারি। এটি কিছু তথ্য ধারণ করে যেটা কখনো পরিবর্তন করা
            যায় না। কিন্তু এতে কি আছে সেটা সবাই দেখতে পারবে।
          </p>

          <p className="paragraph">
            প্রত্যেক ব্লক কে আলাদা করে চেনার জন্য এদের একটি করে unique
            identifier রয়েছে। এই unique identifier টি ব্লকের মাঝে থাকা ডাটা এমং
            সেই নেটওয়ার্কে থাকা পূর্ববর্তী ব্লক এর identifier এর মাধ্যমে বানানো
            হয়ে থাকে।ব্লক তৈরি করার পর এটি নেটওয়ার্ক এ যুক্ত করা হয় এবং
            নেটওয়ার্ক এর প্রত্যেক নোড এর কাছে এই ব্লক এর একটি কপি থাকে।
          </p>

          <h2 className="h2">Transaction</h2>
          <p className="paragraph">
            ব্লকচেইন হলো একটি globally shared, Transactional database.সবাই এই
            ডাটাবেজ এ থাকা রেকর্ড পড়তে পারবে যদি সে এই নেটওয়ার্ক এ যুক্ত থাকে।
            যদি কেউ এই ডাটাবেজ এ কোন পরিবর্তন করতে চায়, তাহলে তাকে একটি
            ট্রানজেকশন তৈরি করতে হবে যেটা নেটওয়ার্ক এর সবাই কে গ্রহণ ও করতে হবে।
            এখানে ট্রানজেকশন মানে ডাটাবেজ এ যে কোন ধরনের পরিবর্তন আনা। ব্লকচেইন
            এর ট্রানজেকশন হয় সম্পূর্ণ রুমে পূর্ণ হবে নাহলে একেবারে ফেইল হবে। এর
            মাঝে কোন কিছু হওয়ার কোন অপশন নেই।
          </p>
          <p className="paragraph">
            ট্রানজেকশন বোঝার জন্য সহজ একটা উদাহরণ দেওয়া যাক যেটা আমরা সবাই জানি।
            মনে করেন আপনি একটা ব্যাঙ্ক এ গিয়েছেন আপনার একাউন্ট থেকে আপনার কোন এক
            বন্ধুর একাউন্ট এ টাকা পাঠানোর জন্য। আপনি যখন টাকা টা পাঠাবেন তখন
            সেটা আপনার একাউন্ট থেকে কেটে নেওয়া হবে এবং আপনার বন্ধুর একাউন্ট এ ও
            সাথে সাথেই যুক্ত করে দেওয়া হবে। এমনটা হওয়ার কোন সুযোগ নেই যে আপনার
            একাউন্ট থেকে টাকা কাটা হলো কিন্তু যাকে পাঠানো হলো তার একাউন্ট এ
            যুক্ত করা হল না বা আপনার বন্ধুর একাউন্ট এ যুক্ত করা হলো টাকা কিন্তু
            আপনার একাউন্ট থেকে কাটা হলো না।
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsBlockchain;