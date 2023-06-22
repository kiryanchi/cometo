# `cometo` - `헬퍼`

해커그라운드 해커톤에 참여하는 `cometo` 팀의 `헬퍼`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

#
## 환경 변수
>Github Repository Setting에서 Secrets and variabls의 Actions를 들어가서 아래값들을 name과 secret에 값을 넣어준다.

>PORT = 8080

>DATABASE_URL='mysql://jaemyeong:123qweasdzxc!@helper.mysql.database.azure.com:3306/helper'
>SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**Github 계정
+ Gthub에서 저희의 레포지토리를 포크 해주세요 !! (*포크를 하지않으면 접근을 할 수가 없기 때문에 꼭 해주세요 !!)
+ Github 계정 -> [회원가입 링크](https://github.com/)
+ Azure 구독이 있는 계정 -> [Azure 링크](azure.microsoft.com)
+ Vscode 설치 -> [VScode 다운로드 링크](https://code.visualstudio.com/download)
+ Vscode Extension Azure 설치
+ Node.js 18 LTS 설치
+ MySQL 워크벤치 설치 -> [MySQL 워크벤치 다운로드 링크](https://dev.mysql.com/downloads/workbench/)

## 시작하기
1. Azure Database for MySQL 서버에 들어갑니다.
2. 만들기를 누른 후 유연한 서버를 만들어 줍니다.
3. 자신의 리소스 그룹으로 설정을 해두고 서버 이름을 helper1(원하는 이름)로 입력을 하고 지역은 Korea Central, MySQL 버전은 8.0으로 설정합니다.
4. 워크로드 유형은 개발 또는 취미 프로젝트용으로 설정 후 인증 방법은 MySQL 인증만 으로 설정합니다.
5. 서버 관리자 로그인 인름은 jaemyeong으로 입력 후 비밀번호는 123qweasdzcx!로 설정합니다.
6. 네트워킹으로 넘어가 연결 방법을 퍼블릭 액세스(허용된 IP 주소)로 선택을 하고 검토 + 만들기를 누른 후 방화벽 규칙 없이 서버 만들기 를 눌러 유연한 서버를 만들어줍니다.
7. helper1(3번에 생성한 서버이름) 리소스를 눌러 들어가서 왼쪽 사이드 바에 있는 설정 안에 있는 데이터베이스를 눌러줍니다.
8. 추가 버튼을 눌러주면 오른쪽에 데이터베이스 만들기가 나옵니다.
9. 데이터베이스 만들기 안에 있는 이름 란에 원하는 이름을 영문으로 작성 후 저장 버튼을 눌러줍니다.
10. App Services에 들어가서 만들기를 눌러줍니다.
11. 웹 앱을 선택해줍니다.
12. 인스턴스 정보에서 이름은 cometo1, 게시는 코드, 런타임 스택은 Node 18 LTS, 운영체제는 리눅스, 지역은 Korea South으로 선택한 후 배포로 넘어갑니다.
13. GitHub Actions 설정에서 지속적인 배포 사용을 선택합니다.
14. 세부정보에서 GitHub 계정 권한 부여를 해주고 조직은 자신의 깃허브 아이디로 선택 후 자신의 레포지토리에 있는 cometo를 선택 후 분기는 devserver를 선택해준다.
15. 검토 + 만들기를 눌러 만들어준다

# 웹 배포
1. 프론트 확인
2. 리소스 그룹 만들기
   + 이름은 rg-hg(랜덤숫자조합으로)
   + 위치는 Korean Central로 선택
3. 웹 앱 선택 만들기
4. 인스턴스 정보 
   + 이름 - rg-hg(랜덤숫자조합으로)
   + 게시 - 정적 웹 앱
   + 런타임 스택 - Node.js 18 LTS
   + 지역 - Korea Central
5. 검토 + 만들기 실행
6. extenstion에서 azure 설치
7. vscode Azure 접속 & 로그인
8. Resources 에서 해당 레포지토리가 있는 리소스에서 
9. App Service 에 있는 {웹 앱 이름}을 우클릭하여
10. Deploy to Web App을 선택한다.

이 상태에서 상단에 Select the folder to deploy {웹 앱 이름}을 선택하여 
배포를 행한다.

ctrl + shift + ` 키를 눌러 터미널을 열고 OUTPUT이라 써져 있는 창을 클릭한다.
진행상황을 확인한다.

여기서 진행중에 info There appears to be trouble with your netwokr connection 이라는 메시지가 출력되면,
터미널을 열고 yarn cache clean을 통해 캐시를 지우고 yarn install을 실행해 복구 시킨다.
이런 과정을 시행하면 이런 오류 메시지가 나타나지 않을 것이다.

Done in OOsec(s) 라고 메시지가 출력되면 배포가 완료되었다.


> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
