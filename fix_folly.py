import os

FOLLY = 'ios/Pods/RCT-Folly/folly/portability'

headers = {
    'Fcntl.h': '#include <fcntl.h>\nnamespace folly { namespace fileops { using ::open; using ::close; using ::read; using ::write; } }\n',
    'SysFile.h': '#include <sys/file.h>\n',
    'SysMman.h': '#include <sys/mman.h>\n',
    'SysStat.h': '#include <sys/stat.h>\n',
    'SysTime.h': '#include <sys/time.h>\n',
    'SysTypes.h': '#include <sys/types.h>\n',
    'SysUio.h': '#include <sys/uio.h>\n',
    'Asm.h': '// asm portability\n',
    'Builtins.h': '// builtins portability\n',
    'Constexpr.h': '// constexpr portability\n',
    'GFlags.h': '// gflags portability\n',
    'GMock.h': '// gmock portability\n',
    'IOVec.h': '#include <sys/uio.h>\n',
    'Math.h': '#include <cmath>\n',
    'Sockets.h': '#include <sys/socket.h>\n#include <netinet/in.h>\n',
    'Windows.h': '// windows portability (noop on iOS)\n',
}

for name, content in headers.items():
    path = os.path.join(FOLLY, name)
    with open(path, 'w') as f:
        f.write('#pragma once\n' + content)
    print(f'Updated {name}')

print('Done')
