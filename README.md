# morgan-winstion

winston.js : 배포환경(실제 서버 운영)에서 console.log 와 console.error를 대체하기 위한 모듈

서버 시작시 문제점

1. 실제 배포시 console 객체의 매서드들이 언제 호출되었는지 파악하기 힘듬
2. 서버 종료시 쌓여있는 로그들이 사라짐

위와 같은 상황을 방지하기위해 winston 사용
로그를 외부로 파일에 저장해서 관리함

winston-daily-rotate-file: 로그 파일을 관리해주는 모듈
기본적으로 하루(1일) 단위로 새 로그 파일을 생성해주고,
날짜별로 로그파일을 관리하게 구분해 주며,
로그 파일의 최대 크기와 최대 저장 파일 개수 등을 설정가능

format은 로그의 형식을 지정할 수 있다.

json, label, timestamp, printf, simple, combine 등의 다양한 형식으로 지정이 가능하다.

기본적으로는 JSON 형식으로 기록하지만, combine은 여러 형식을 혼합해서 사용할 때 쓴다.

timestamp : 날짜 형식 지정
label : 어플리케이션 이름을 지정
level 과 message는 자동으로 콘솔에서 지정

# winston의 로그 레벨 순서

error: 0 , warn: 1 , info: 2 , http: 3 , verbose: 4 , debug: 5 , silly: 6
숫자가 낮을 수록 우선순위가 높다 ex)error 가 가장 위험한 로그

winston 로그의 level을 설정하면 해당 레벨 이상의 priority를 가지는 즉, 숫자가 같거나 낮은 로그를 함께 출력하게 된다.
(만일 level을 info로 설정하면 2보다 낮은 error와 warn 로그도 같이 출력)

이외의 winston daily rotate 로깅 설정

new winstonDaily({

    frequency: 회전 빈도를 나타내는 문자열입니다. 이는 특정 시간에 발생하는 회전과 달리 시간이 지정된 회전을 원하는 경우에 유용합니다. 유효한 값은 '#m' 또는 '#h'(예: '5m' 또는 '3h')입니다. 이 null을 남겨두는 datePattern것은 회전 시간 에 의존합니다 . (기본값: null)

    datePattern: 회전에 사용할 moment.js 날짜 형식 을 나타내는 문자열 입니다. 이 문자열에 사용된 메타 문자는 파일 회전 빈도를 나타냅니다. 예를 들어, datePattern이 단순히 'HH'인 경우 매일 선택하여 추가되는 24개의 로그 파일로 끝납니다. (기본값: 'YYYY-MM-DD')

    zippedArchive: 아카이브된 로그 파일을 gzip으로 압축할지 여부를 정의하는 부울입니다. (기본값: '거짓')

    filename: 로그에 사용할 파일 이름입니다. 이 파일 이름은 파일 이름의 %DATE%해당 지점에 서식이 지정된 datePattern을 포함하는 자리 표시자를 포함할 수 있습니다 . (기본값: 'winston.log.%DATE%')

    dirname: 로그 파일을 저장할 디렉터리 이름입니다. (기본: '.')

    stream: 사용자 지정 스트림에 직접 쓰고 회전 기능을 우회합니다. (기본값: null)

    maxSize: 회전할 파일의 최대 크기입니다. 바이트 수 또는 kb, mb 및 GB 단위가 될 수 있습니다. 단위를 사용하는 경우 접미사로 'k', 'm' 또는 'g'를 추가합니다. 단위는 숫자를 직접 따라야 합니다. (기본값: null)

    maxFiles: 보관할 최대 로그 수입니다. 설정하지 않으면 로그가 제거되지 않습니다. 이는 파일 수 또는 일 수일 수 있습니다. 일을 사용하는 경우 접미사로 'd'를 추가합니다. (기본값: null)

    options: 파일 스트림에 전달되어야 하는 추가 옵션을 나타내는 'https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options' 와 유사한 객체 . (기본값: { flags: 'a' })

    auditFile : 감사 파일의 이름을 나타내는 문자열. 옵션 개체의 해시를 계산하여 생성된 기본 파일 이름을 재정의하는 데 사용할 수 있습니다. (기본값: '..json')

    utc : 파일 이름의 날짜에 UTC 시간을 사용합니다. (기본값: 거짓)

    extension : 파일 이름에 추가할 파일 확장자. (기본: '')

    createSymlink : 현재 활성 로그 파일에 대한 tailable symlink를 만듭니다. (기본값: 거짓)

    symlinkName : tailable symlink의 이름입니다. (기본값: 'current.log')

}),
