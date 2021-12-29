# 🚀spacebar_web



# **일상으로부터의 한 칸, 당신의 한잔을 위한 혼술 패키지 및 홈페이지**

> 코로나 시대 홈코노미 아이템 제작과 상품 소개 웹페이지 제작
>
> 2020년 가톨릭대학교 온라인 해커톤 장려상(3등)
>
> 2020.07.20~2020.07.31

<br/>

![1](https://user-images.githubusercontent.com/55903679/147661848-c7f0dd4e-22ce-449a-a355-a968afbf8956.png)

![2](https://user-images.githubusercontent.com/55903679/147661923-df893098-269d-493c-a7c1-bedc31cddd99.png)

<br/>

## 👀Process



![3](https://user-images.githubusercontent.com/55903679/147662143-0a18c91b-3b4b-4802-aa28-864b0affd3ed.png)

![image](https://user-images.githubusercontent.com/55903679/147662376-38dc4535-3d53-4c9c-8a4a-20db15bfd194.png)

![3](https://user-images.githubusercontent.com/55903679/147662731-aeb3f280-18f9-4a23-a553-1e89257cf3e7.png)
![4](https://user-images.githubusercontent.com/55903679/147662742-98d1a3bc-9dd7-4d0d-9054-c3dcfb331ba3.png)



</br>

## 🤹‍♀️Role

수정

```
- 자동 음료 디스펜서 설계, 제작 및 아두이노 코딩
- 웹 페이지 내 제품 설명, 제작 과정 부분 개발
- 웹 페이지 내 상단 메뉴바 개발
- 웹 애니메이션 개발
```

승훈

```
- 자동 음료 디스펜서와 관련 부품 설계
- 자동 음료 디스펜서 3D 모델링
- 아두이노 코딩 및 조립 보조
- 웹 페이지 내 top button 개발
```

주영

```
- 웹 페이지 내 프로젝트 스토리, 사업 배경 부분 개발
- 웹 애니메이션 개발
- 컵 리드 아두이노 코딩 및 제작 
```

서현

```
- 브랜드 슬로건, 스토리 기획
- 비주얼 아이덴티티 작업
	- 브랜드 네이밍, 로고디자인, 웹사이트 메인, 제품 상세페이지 디자인
```

<br/>

## 🔧TOOLS

- Sublime Text
- Arduino
- AutoDesk TinkerCad
- AutoDesk Fusion 360 

<br/>

## ✨Core Implementation Code

> In Spacebar


#### 1. toggle button 클릭 시 top으로 이동, 스크롤 시 메뉴 디자인 변경

**🍯solution**

```kotlin
//On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 100
      ? $("nav").addClass("navShadow")
      : $("nav").removeClass("navShadow");
    windowTop > 100 ? $("ul").css("top", "100px") : $("ul").css("top", "160px");
  });

  //Click Logo To Scroll To Top
  $("#logo").on("click", () => {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      400
    );
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on("click", function (e) {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 70
      },
      500
    );
    e.preventDefault();
  });

  //Toggle Menu
  $("#menu-toggle").on("click", () => {
    $("#menu-toggle").toggleClass("closeMenu");
    $("ul").toggleClass("showMenu");

    $("li").on("click", () => {
      $("ul").removeClass("showMenu");
      $("#menu-toggle").removeClass("closeMenu");
    });
  });
});
```



## 👊C2H6O

> 💻 SpaceBar's Developer & Designer

| **🙋 [이수정](https://github.com/doodung)** | **🙋‍ [오승훈](https://github.com/OhSeungHoony)** | **🙋‍ [엄주영](https://github.com/JooYoungEom)** |   🙋조서현    |
| :----------------------------------------: | :---------------------------------------------: | :--------------------------------------------: | :----------: |
|               Lead Developer               |                    Developer                    |                   Developer                    | PM, Designer |
