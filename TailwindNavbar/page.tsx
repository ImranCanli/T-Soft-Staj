"use client"

import { AlignJustify, ChevronDown, ChevronRight, Headset, Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isvisible, setIsVisible] = useState(false);
  const [isvisibleLang, setIsVisibleLang] = useState(false);
  const [index, setIndex] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 
  const [isHoveredNew, setIsHoveredNew] = useState(false); 
  const [isHoveredDiscount, setIsHoveredDiscount] = useState(false);
  const [isHoveredHouse, setIsHoveredHouse] = useState(false);
  const [isHoveredWoman, setIsHoveredWoman] = useState(false);
  const [isHoveredMan, setIsHoveredMan] = useState(false);

  const handleHeaderClick = () => {
    setIsVisibleLang(false)
    setIsVisible(!isvisible);
  }

  const handleClickOutside = () => {
    setIsVisible(false);
    setIsVisibleLang(false)
  }

  const currency = ["TL", "USD", "EUR", "SAR", "RUB"];
  const flags = ["tr.webp", "en.webp", "ar.webp"];

  const handleLanguageClick = (lang: number) => {
    setIsVisible(false);
    setIndex(lang);
  }

  const handleLanguageDropdown = () => {
    setIsVisible(false)
    setIsVisibleLang(!isvisibleLang);
  }

  const handleLangClick = (lang: number) => {
    setLangIndex(lang);
  }

  return (
  <div className="w-screen h-screen overflow-hidden">

      <div className="w-full h-46 p-0 m-0 flex flex-col bg-white relative border-b border-slate-600">
        <div className="w-full m-0 p-0 h-8 bg-slate-100 -600 relative flex justify-center">
          <div className="w-3/4 h-full flex justify-between bg-white-500">
            <div className="h-full w-100 flex align-middle text-black justify-start bg-white-500 pt-1">
              <a className="no-underline hover:underline cursor-pointer text-xs mr-5 mt-1 font-medium">Anasayfa</a>
              <a className="no-underline hover:underline cursor-pointer text-xs mr-5 mt-1 font-medium">Müşteri Hizmetleri</a>
              <a className="no-underline hover:underline cursor-pointer text-xs mr-5 mt-1 font-medium">Mağazalarımız</a>
              <a className="no-underline hover:underline cursor-pointer text-xs mr-5 mt-1 font-medium">Yetkili Servis</a>
              <a className="no-underline hover:underline cursor-pointer text-xs mr-5 mt-1 font-medium">Siparişlerim</a>
            </div>
            <div className="w-50 h-full flex align-middle justify-end bg-white-300 pt-1">
            <div>
              <Headset className="inline-block text-black text-xs w-6 h-6 pr-2"/>
              <p className="inline text-black text-xs cursor-pointer hover:underline">019 029 48 90</p>
            </div>
            <div className="w-px bg-slate-700 h-4/5 mx-4 opacity-20"></div>
              <div className="flex flex-row cursor-pointer relative" onClick={handleHeaderClick}>
              <img src={flags[langIndex]} className="w-5 h-5 mt-1" />
              <ChevronDown className="text-black mt-1 text-xs w-5 h-5"/>
              {isvisible && (
                <div className="w-24 h-24 bg-white text-black flex justify-start items-center absolute top-10 z-10 shadow-md flex-col border rounded-lg">
                  <div onClick={() => handleLangClick(0)} className="w-full flex flex-row items-center justify-around mt-2">
                    <img src="tr.webp" className="w-5 h-5 ml-2" />
                    <p className="text-xs hover:underline active:text-orange-500 mr-2">Türkçe</p>
                  </div>
                  <div onClick={() => handleLangClick(1)} className="w-full flex flex-row items-center justify-around mt-2">
                    <img src="en.webp" className="w-5 h-5 ml-2" />
                    <p className="text-xs hover:underline active:text-orange-500 mr-2">English</p>
                  </div>
                  <div onClick={() => handleLangClick(2)} className="w-full flex flex-row items-center justify-around mt-2">
                    <img src="ar.webp" className="w-5 h-5 ml-1" />
                    <p className="text-xs hover:underline active:text-orange-500 mr-3">عربي</p>
                  </div>
                </div>
              )}
              </div>
              <div className="w-px bg-slate-700 h-4/5 mx-4 opacity-20"></div>
              <div  className="flex flex-row cursor-pointer relative" onClick={handleLanguageDropdown}>
              <p className="text-black text-sm mt-1">{currency[index]}</p>
              <ChevronDown className="text-black mt-1 text-xs w-5 h-5"/>
              {isvisibleLang && (
                <div className="w-11 h-26 bg-white text-black flex justify-start items-center absolute top-10 z-10 shadow-md flex-col border rounded-lg p-4">
                  <p onClick={() => handleLanguageClick(0)} className="text-xs hover:underline tracking-tighter font-light">{currency[0]}</p>
                  <p onClick={() => handleLanguageClick(1)} className="text-xs hover:underline tracking-tighter font-light pt-1">{currency[1]}</p>
                  <p onClick={() => handleLanguageClick(2)} className="text-xs hover:underline tracking-tighter font-light pt-1">{currency[2]}</p>
                  <p onClick={() => handleLanguageClick(3)} className="text-xs hover:underline tracking-tighter font-light pt-1">{currency[3]}</p>
                  <p onClick={() => handleLanguageClick(4)} className="text-xs hover:underline tracking-tighter font-light pt-1">{currency[4]}</p>
                </div>
              )}
              </div>              
            </div>
          </div>
        </div>
        <div onClick={handleClickOutside} className="w-full m-0 p-0 h-24 bg-white border-b border-slate-100 flex flex-row align-middle justify-center relative">
            <div className="w-3/4 h-full m-0 p-0 flex flex-row align-middle justify-between">
              <img src="TailwindHeaderLogo.png" className="w-32 object-contain cursor-pointer"/>
              <div className="w-96 h-10 mt-8 flex flex-row align-middle justify-between">
                <input className="rounded-lg w-full h-full bg-slate-100 pl-2 font-light p-3 border border-slate-200" placeholder="Ara"/>
                <Search className="text-black text-sm font-thin -ml-8 mt-2 mr-1 w-5 h-5"/>
              </div>
              <div className="bg-green-500 w-96 h-full flex flex-row align-middle justify-between">
                <div className="h-full w-32 bg-white flex flex-col">
                  <div className="w-full h-5 cursor-pointer text-black hover:text-orange-500 font-medium text-sm flex mt-10">
                    <Heart className="font-thin cursor-pointer"/>
                    <a className="no-underline ml-2 cursor-pointer ">Favorilerim</a>
                  </div>
                </div>
                <div className="h-full w-32 bg-white flex flex-col">
                  <div className="w-full h-5 cursor-pointer text-black hover:text-orange-500 font-medium text-sm flex mt-10">
                    <User className="font-thin cursor-pointer"/>
                    <a className="no-underline ml-2 cursor-pointer ">Hesabım</a>
                  </div>
                </div>
                <div className="h-full w-32 bg-white flex flex-col">
                  <div className="w-full h-5 cursor-pointer text-black hover:text-orange-500 font-medium text-sm flex mt-10">
                    <ShoppingCart className="font-thin cursor-pointer"/>
                    <a className="no-underline ml-2 cursor-pointer ">Siparişlerim</a>
                  </div>
                </div>

              </div>
              {/* <input className="rounded-lg w-80 h-8 bg-slate-200 pl-2 font-light mt-9" placeholder="Ara"/> */}
            </div>
        </div>
        <div onClick={handleClickOutside} className="w-full h-14 bg-white flex flex-row justify-center relative">
          <div className="w-3/4 h-full flex flex-row align-middle justify-start overflow-hidden">
            <div className="w-28 h-full mt-3 flex flex-row align-middle justify-between bg-white text-black hover:text-orange-500 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <AlignJustify className="mt-0.5"/>
              <a className="no-underline text-sm mt-0.5 font-semibold">Kategoriler</a>
            </div>
            <div className="w-28 h-full mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer" onMouseEnter={() => setIsHoveredNew(true)} onMouseLeave={() => setIsHoveredNew(false)}>
              <a className="no-underline text-sm mt-0.5 font-semibold">Yeni</a>
            </div>
            <div className="w-28 h-full mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer" onMouseEnter={() => setIsHoveredDiscount(true)} onMouseLeave={() => setIsHoveredDiscount(false)}>
              <a className="no-underline text-sm mt-0.5 font-semibold">İndirim</a>
            </div>
            <div className="w-28 h-6 mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer">
              <a className="no-underline text-sm mt-0.5 font-semibold">Kampanya</a>
            </div>
            <div className="w-28 h-6 mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer">
              <a className="no-underline text-sm mt-0.5 font-semibold">Markalar</a>
            </div>
            <div className="w-28 h-6 mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer">
              <a className="no-underline text-sm mt-0.5 font-semibold">Galeri</a>
            </div>
            <div className="w-28 h-6 mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer">
              <a className="no-underline text-sm mt-0.5 font-bold">SSS</a>
            </div>
            <div className="w-28 h-6 mt-3 flex flex-row align-middle justify-center bg-white text-black hover:text-orange-500 cursor-pointer">
              <a className="no-underline text-sm mt-0.5 font-bold">Blog</a>
            </div>
          </div>
        </div>
      </div>
      {isHovered && (
        <div className="w-full h-[450px] bg-transparent flex items-start justify-center -mt-1 absolute top-46 -z-1">
          <div className="w-3/4 h-full bg-white rounded-b-lg shadow-md flex flex-row" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="bg-slate-100 w-1/5 min-w-60 flex flex-col rounded-bl-lg *:w-full [&_>p]:text-red *:cursor-pointer">
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500" onMouseEnter={() => setIsHoveredHouse(true)} onMouseLeave={() => setIsHoveredHouse(false)}>
            <p className="tracking-tighter"> Ev & Mobilya</p>
            <ChevronRight />
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500" onMouseEnter={() => setIsHoveredWoman(true)} onMouseLeave={() => setIsHoveredWoman(false)}>
            <p className="tracking-tighter"> Kadın</p>
            <ChevronRight />
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500" onMouseEnter={() => setIsHoveredMan(true)} onMouseLeave={() => setIsHoveredMan(false)}>
            <p className="tracking-tighter"> Erkek</p>
            <ChevronRight />
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500">
            <p className="tracking-tighter"> Kampanyalar</p>
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500">
            <p className="tracking-tighter"> Anne & Çocuk</p>
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500">
            <p className="tracking-tighter"> Müşteri Hizmetleri</p>
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500">
            <p className="tracking-tighter"> Süpermarket</p>
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500">
            <p className="tracking-tighter"> Kozmetik</p>
          </div>
          <div className="w-full h-12 items-center text-black bg-transparent px-3 flex justify-between hover:bg-white hover:text-orange-500">
            <p className="tracking-tighter"> Elektronik</p>
          </div>
          </div>
        {isHoveredHouse && (
          <div className="w-4/5 h-full grid grid-cols-4 flex-nowrap overflow-y-scroll" onMouseEnter={() => setIsHoveredHouse(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
              <a className="font-bold hover:text-orange-500">Sofra & Mutfak</a>
              <a className="font-light hover:text-orange-500 text-sm">Yemek Takımı</a>
              <a className="font-light hover:text-orange-500 text-sm">Çatal Kaşık Bıçak Seti</a>
              <a className="font-light hover:text-orange-500 text-sm">Baharat Takımı</a>
              <a className="font-light hover:text-orange-500 text-sm">Bardak</a>
              <a className="font-light hover:text-orange-500 text-sm">Fırın & Kek Kalıbı</a>
              <a className="font-light hover:text-orange-500 text-sm">Çaydanlık</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Tencere Seti</a>
              <a className="font-bold hover:text-orange-500">Banyo</a>
              <a className="font-light hover:text-orange-500 text-sm">Havlu & Havlu Seti</a>
              <a className="font-light hover:text-orange-500 text-sm">Bornoz</a>
              <a className="font-light hover:text-orange-500 text-sm">Banyo Seti</a>
              <a className="font-light hover:text-orange-500 text-sm">Banyo Paspası</a>
              <a className="font-light hover:text-orange-500 text-sm">Fırın & Kek Kalıbı</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Peştamal</a>
              <a className="font-bold hover:text-orange-500">Ev Tekstili</a>
              <a className="font-light hover:text-orange-500 text-sm">Yatak Odası</a>
              <a className="font-light hover:text-orange-500 text-sm">Halı & Kilim & Paspas</a>
              <a className="font-light hover:text-orange-500 text-sm">Perde</a>
              <a className="font-light hover:text-orange-500 text-sm">Nevresim Takımı</a>
              <a className="font-light hover:text-orange-500 text-sm">Yastık</a>
              <a className="font-light hover:text-orange-500 text-sm">Kırlent Kılıfı</a>
              <a className="font-light hover:text-orange-500 text-sm">Mutfak Havlusu</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Uyku Seti</a>
            </div>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
            <a className="font-bold hover:text-orange-500">Ev & Dekorasyon</a>
              <a className="font-light hover:text-orange-500 text-sm">Dekoratif Aksesuar</a>
              <a className="font-light hover:text-orange-500 text-sm">Tablo</a>
              <a className="font-light hover:text-orange-500 text-sm">Duvar saati</a>
              <a className="font-light hover:text-orange-500 text-sm">Oda kokusu</a>
              <a className="font-light hover:text-orange-500 text-sm">Ayna</a>
              <a className="font-light hover:text-orange-500 text-sm">Çaydanlık</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Vazo & Eşya</a>
            <a className="font-bold hover:text-orange-500">Aydınlatma</a>
              <a className="font-light hover:text-orange-500 text-sm">Avize</a>
              <a className="font-light hover:text-orange-500 text-sm">Lambader</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Abajur</a>
            <a className="font-bold hover:text-orange-500">Mobilya</a>
              <a className="font-light hover:text-orange-500 text-sm">Salon & Oturma Odası</a>
              <a className="font-light hover:text-orange-500 text-sm">Yatak odası</a>
              <a className="font-light hover:text-orange-500 text-sm">Bahçe Mobilyası</a>
              <a className="font-light hover:text-orange-500 text-sm">Çalışma Odası</a>
              <a className="font-light hover:text-orange-500 text-sm">Yemek Odası</a>
              <a className="font-light hover:text-orange-500 text-sm">Oturma Grupları</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Genç Odası</a>              
            </div>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
            <a className="font-bold hover:text-orange-500">Hobi</a>
              <a className="font-light hover:text-orange-500 text-sm">Pari Malzemeleri</a>
              <a className="font-light hover:text-orange-500 text-sm">Müzik Alet</a>
              <a className="font-light hover:text-orange-500 text-sm">Oyun Grupları</a>
              <a className="font-light hover:text-orange-500 text-sm">Led Işık</a>
              <a className="font-light hover:text-orange-500 text-sm">Hediyelik Ürünler</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Hediye Sepeti</a>
            <a className="font-bold hover:text-orange-500">Spor & Outdoor</a>
              <a className="font-light hover:text-orange-500 text-sm">Koşu Bandı</a>
              <a className="font-light hover:text-orange-500 text-sm">Dumbell & Ağırlık</a>
              <a className="font-light hover:text-orange-500 text-sm">Pilates & Yoga</a>
              <a className="font-light hover:text-orange-500 text-sm">Eliptik Bisiklet</a>
              <a className="font-light hover:text-orange-500 text-sm">Yoga Matı</a>
              <a className="font-light hover:text-orange-500 text-sm">Sporcu Eldiveni</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Pilates Topu</a>
            <a className="font-bold hover:text-orange-500">Kitap</a>
              <a className="font-light hover:text-orange-500 text-sm">E-Kitaplar</a>
              <a className="font-light hover:text-orange-500 text-sm">Çizgi Roman</a>
              <a className="font-light hover:text-orange-500 text-sm">Yabancı Dil</a>
              <a className="font-light hover:text-orange-500 text-sm">Çocuk Kitabı</a>
              <a className="font-light hover:text-orange-500 text-sm">Kişisel Gelişim</a>
              <a className="font-light hover:text-orange-500 text-sm">Yardımcı Kitaplar</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Çocuk Bakım Kitapları</a>
            </div>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
            <a className="font-bold hover:text-orange-500">Kırtasiye</a>
              <a className="font-light hover:text-orange-500 text-sm">Defter</a>
              <a className="font-light hover:text-orange-500 text-sm">Ajanda</a>
              <a className="font-light hover:text-orange-500 text-sm">Fotokopi Kağıdı</a>
              <a className="font-light hover:text-orange-500 text-sm">Kalem</a>
              <a className="font-light hover:text-orange-500 text-sm">Boya Seti</a>
              <a className="font-light hover:text-orange-500 text-sm">Masaüstü Gereçleri</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Ofis Teknolojisi</a>
            <a className="font-bold hover:text-orange-500">Yapı Market</a>
              <a className="font-light hover:text-orange-500 text-sm">Elektrikli Ev Aletleri</a>
              <a className="font-light hover:text-orange-500 text-sm">Hırdavat Ürünleri</a>
              <a className="font-light hover:text-orange-500 text-sm">Boya</a>
              <a className="font-light hover:text-orange-500 text-sm">Matkap</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Ampul</a>
            <a className="font-bold hover:text-orange-500">Otomobil</a>
              <a className="font-light hover:text-orange-500 text-sm">Oto Aksesuar</a>
              <a className="font-light hover:text-orange-500 text-sm">Araç Kokusu</a>
              <a className="font-light hover:text-orange-500 text-sm">Oto Lastik</a>
              <a className="font-light hover:text-orange-500 text-sm">Oto Paspası</a>
              <a className="font-light hover:text-orange-500 text-sm">Güneşlik & Perde</a>
              <a className="font-light hover:text-orange-500 text-sm">Kol Dayama</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Kolçak</a>
            </div>
          </div>
        )}
        {isHoveredWoman && (
          <div className="w-4/5 h-full grid grid-cols-4 flex-nowrap overflow-y-scroll" onMouseEnter={() => setIsHoveredWoman(true)} onMouseLeave={() => setIsHoveredWoman(false)}>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
              <a className="font-bold hover:text-orange-500">Spor & Outdoor</a>
              <a className="font-light hover:text-orange-500 text-sm">Sweatshirt</a>
              <a className="font-light hover:text-orange-500 text-sm">Tişört</a>
              <a className="font-light hover:text-orange-500 text-sm">Tayt</a>
              <a className="font-light hover:text-orange-500 text-sm">Eşofman</a>
              <a className="font-light hover:text-orange-500 text-sm">Koşu Ayakkabısı</a>
              <a className="font-light hover:text-orange-500 text-sm">Spor Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Outdoor Ayakkabı</a>
              <a className="font-light hover:text-orange-500 text-sm">Kar Botu</a>
              <a className="font-light hover:text-orange-500 text-sm">Outdoor Ekipmanları</a>
              <a className="font-light hover:text-orange-500 text-sm">Sporcu Besinleri</a>
              <a className="font-light hover:text-orange-500 text-sm">Sporcu Aksesuarları</a>
              <a className="font-light hover:text-orange-500 text-sm">Outdoor Çanta</a>
              <a className="font-light hover:text-orange-500 text-sm">Kayak Malzemeleri</a>
              <a className="font-light hover:text-orange-500 text-sm">Uyku Tulumu</a>
              <a className="font-light hover:text-orange-500 text-sm">Mat</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Dağcılık</a>
            <a className="font-bold hover:text-orange-500">Ayakkabı</a>
              <a className="font-light hover:text-orange-500 text-sm">Topuklu Ayakkabı</a>
              <a className="font-light hover:text-orange-500 text-sm">Sneaker</a>
              <a className="font-light hover:text-orange-500 text-sm">Günlük Ayakkabı</a>
              <a className="font-light hover:text-orange-500 text-sm">Babet</a>
              <a className="font-light hover:text-orange-500 text-sm">Sandalet</a>
              <a className="font-light hover:text-orange-500 text-sm">Bot</a>
              <a className="font-light hover:text-orange-500 text-sm">Çizme</a>
              <a className="font-light hover:text-orange-500 text-sm">Kar Botu</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Loafer</a>
            </div>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
              <a className="font-bold hover:text-orange-500">Çanta</a>
              <a className="font-light hover:text-orange-500 text-sm">Omuz Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Sırt Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Bel Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Okul Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Laptop Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Portföy</a>
              <a className="font-light hover:text-orange-500 text-sm">Postacı Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">El Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Kanvas Çanta</a>
              <a className="font-light hover:text-orange-500 text-sm">Makyaj Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Abiye Çanta</a>
              <a className="font-light hover:text-orange-500 text-sm">Çapraz Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Bez Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Anne Bebek Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Evrak Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm">Tote Çanta</a>
              <a className="font-light hover:text-orange-500 text-sm">Beslenme Çantası</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Kartlık</a>
            <a className="font-bold hover:text-orange-500">İç Giyim</a>
              <a className="font-light hover:text-orange-500 text-sm">Pijama Takımı</a>
              <a className="font-light hover:text-orange-500 text-sm">Gecelik</a>
              <a className="font-light hover:text-orange-500 text-sm">Korse</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Çorap</a>
            </div>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
              <a className="font-bold hover:text-orange-500">Kozmetik</a>
              <a className="font-light hover:text-orange-500 text-sm">Parfüm</a>
              <a className="font-light hover:text-orange-500 text-sm">Göz Makyajı</a>
              <a className="font-light hover:text-orange-500 text-sm">Cilt Bakım</a>
              <a className="font-light hover:text-orange-500 text-sm">Saç Bakımı</a>
              <a className="font-light hover:text-orange-500 text-sm">Makyaj</a>
              <a className="font-light hover:text-orange-500 text-sm">Ağız Bakım</a>
              <a className="font-light hover:text-orange-500 text-sm">Vücut Bakım</a>
              <a className="font-light hover:text-orange-500 text-sm">Duş Jeli</a>
              <a className="font-light hover:text-orange-500 text-sm">Ruj</a>
              <a className="font-light hover:text-orange-500 text-sm">Dudak Nemlendirici</a>
              <a className="font-light hover:text-orange-500 text-sm">Eyeliner</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">BB & CC Krem</a>
            </div>
            <div className="*:text-black pl-4 pt-4 *:cursor-pointer *:tracking-tighter flex flex-col">
              <a className="font-bold hover:text-orange-500">Giyim</a>
              <a className="font-light hover:text-orange-500 text-sm">Tişört</a>
              <a className="font-light hover:text-orange-500 text-sm">Şort</a>
              <a className="font-light hover:text-orange-500 text-sm">Gömlek</a>
              <a className="font-light hover:text-orange-500 text-sm">Eşofman</a>
              <a className="font-light hover:text-orange-500 text-sm">Pantolon</a>
              <a className="font-light hover:text-orange-500 text-sm">Ceket</a>
              <a className="font-light hover:text-orange-500 text-sm">Kot Pantolon</a>
              <a className="font-light hover:text-orange-500 text-sm">Yelek</a>
              <a className="font-light hover:text-orange-500 text-sm">Kazak</a>
              <a className="font-light hover:text-orange-500 text-sm">Mont</a>
              <a className="font-light hover:text-orange-500 text-sm">Takım Elbise</a>
              <a className="font-light hover:text-orange-500 text-sm">Sweatshirt</a>
              <a className="font-light hover:text-orange-500 text-sm">Deri Mont</a>
              <a className="font-light hover:text-orange-500 text-sm">Kaban</a>
              <a className="font-light hover:text-orange-500 text-sm">Hırka</a>
              <a className="font-light hover:text-orange-500 text-sm">Trençkot</a>
              <a className="font-light hover:text-orange-500 text-sm">Palto</a>
              <a className="font-light hover:text-orange-500 text-sm mb-6">Yağmurluk</a>
            </div>
          </div>
        )}
        {isHoveredMan && (
          <div className="w-4/5 h-full p-4 *:text-black *:font-bold tracking-tight *:mr-52 *:cursor-pointer" onMouseEnter={() => setIsHoveredMan(true)} onMouseLeave={() => setIsHoveredMan(false)}>
            <a className="hover:text-orange-500">test1</a>
            <a className="hover:text-orange-500">test2</a>
            <a className="hover:text-orange-500">test3</a>
          </div>
        )}
          </div>
        </div>
      )}
      {isHoveredNew && (
        <div className="w-full h-96 bg-transparent flex items-start justify-center -mt-1 absolute top-46 -z-1">
          <div className="w-3/4 h-96 bg-white rounded-b-lg shadow-md flex items-start justify-start flex-col flex-wrap *:text-black py-8 pl-14 *:text-sm *:h-full *:w-1/6" onMouseEnter={() => setIsHoveredNew(true)} onMouseLeave={() => setIsHoveredNew(false)}>
            <div className="*:text-black *:no-underline *:text-start *:cursor-pointer flex justify-start flex-col *:tracking-tight py-3">
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Yazıcı & Projeksiyon</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 5</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 6</a>
              <br/>
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Bilgisayar/Tablet</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 5</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 6</a>
            </div>
            <div className="*:text-black *:no-underline *:text-start *:cursor-pointer flex justify-start flex-col *:tracking-tight py-3">
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Telefon & Telefon Aksesuarları</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
              <br/>
              <a className="font-semibold hover:text-orange-500 w-full mb-1">TV, Görüntü & Ses Sistemleri</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 5</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 6</a>
            </div>
            <div className="*:text-black *:no-underline *:text-start *:cursor-pointer flex justify-start flex-col *:tracking-tight py-3">
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Beyaz Eşya</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
              <br/>
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Foto & Kamera</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
            </div>
            <div className="*:text-black *:no-underline *:text-start *:cursor-pointer flex justify-start flex-col *:tracking-tight py-3">
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Oyun & Oyun Konsolları</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
              <br/>
              <a className="font-semibold hover:text-orange-500 w-full mb-1">Aksesuar</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 1</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 2</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 3</a>
              <a className="hover:text-orange-500 font-light text-sm">Birnici Alt Kırılım 4</a>
            </div>
            <div className="h-full rounded-lg">
              <img src="dress.webp" className="rounded-lg"/>
            </div>
          </div>
        </div>
      )}
      {isHoveredDiscount && (
        <div className="w-full h-80 bg-transparent flex items-start justify-center -mt-1 absolute top-46 -z-1">
          <div className="w-3/4 h-52 bg-white rounded-b-lg shadow-md flex items-start flex-col flex-wrap justify-start pt-4 px-8" onMouseEnter={() => setIsHoveredDiscount(true)} onMouseLeave={() => setIsHoveredDiscount(false)}>
            <div className="h-full *:text-black *:tracking-tight flex flex-col *:">
              <a className="hover:text-orange-500 cursor-pointer font-semibold text-base mb-2">KADIN</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Ayakkabı</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Aksesuar</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Çanta</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">İç Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Lüks</a>
              <a className="hover:text-orange-500 cursor-pointer underline text-xs mb-1">Tümünü Gör</a>
            </div>
            <div className="h-full *:text-black *:tracking-tight flex flex-col *:">
              <a className="hover:text-orange-500 cursor-pointer font-semibold text-base mb-2">ERKEK</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Ayakkabı</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Aksesuar</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Çanta</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">İç Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Lüks</a>
              <a className="hover:text-orange-500 cursor-pointer underline text-xs mb-1">Tümünü Gör</a>
            </div>
            <div className="h-full *:text-black *:tracking-tight flex flex-col *:">
              <a className="hover:text-orange-500 cursor-pointer font-semibold text-base mb-2">ÇOCUK</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Ayakkabı</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Aksesuar</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Çanta</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">İç Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Lüks</a>
              <a className="hover:text-orange-500 cursor-pointer underline text-xs mb-1">Tümünü Gör</a>
            </div>
            <div className="h-full *:text-black *:tracking-tight flex flex-col *:">
              <a className="hover:text-orange-500 cursor-pointer font-semibold text-base mb-2">AKSESUAR</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Ayakkabı</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Aksesuar</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Çanta</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">İç Giyim</a>
              <a className="hover:text-orange-500 cursor-pointer no-underline text-xs mb-1">Lüks</a>
              <a className="hover:text-orange-500 cursor-pointer underline text-xs mb-1">Tümünü Gör</a>
            </div>
          </div>
        </div>
      )}
      <div onClick={handleClickOutside} className="w-screen h-full bg-black"></div>
  </div>
  );
}
