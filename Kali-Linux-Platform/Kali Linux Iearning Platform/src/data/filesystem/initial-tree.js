export const initialVFS = {
  inode: 1,
  type: 'dir',
  owner: 'root',
  group: 'root',
  permissions: '755',
  children: {
    home: {
      inode: 2,
      type: 'dir',
      owner: 'root',
      group: 'root',
      permissions: '755',
      children: {
        kali: {
          inode: 3,
          type: 'dir',
          owner: 'kali',
          group: 'kali',
          permissions: '755',
          children: {
            Desktop: {
              inode: 4,
              type: 'dir',
              owner: 'kali',
              group: 'kali',
              permissions: '755',
              children: {}
            },
            Documents: {
              inode: 5,
              type: 'dir',
              owner: 'kali',
              group: 'kali',
              permissions: '755',
              children: {
                'note.txt': {
                  inode: 6,
                  type: 'file',
                  owner: 'kali',
                  group: 'kali',
                  permissions: '644',
                  content: 'مرحباً بك في Kali Linux.'
                }
              }
            },
            Downloads: {
              inode: 7,
              type: 'dir',
              owner: 'kali',
              group: 'kali',
              permissions: '755',
              children: {}
            }
          }
        }
      }
    },
    etc: {
      inode: 8,
      type: 'dir',
      owner: 'root',
      group: 'root',
      permissions: '755',
      children: {
        'os-release': {
          inode: 9,
          type: 'file',
          owner: 'root',
          group: 'root',
          permissions: '644',
          content: 'PRETTY_NAME="Kali GNU/Linux"\n'
        }
      }
    },
    var: {
      inode: 10,
      type: 'dir',
      owner: 'root',
      group: 'root',
      permissions: '755',
      children: {
        log: {
          inode: 11,
          type: 'dir',
          owner: 'root',
          group: 'root',
          permissions: '755',
          children: {
            syslog: {
              inode: 12,
              type: 'file',
              owner: 'root',
              group: 'root',
              permissions: '644',
              content: 'system booted successfully.'
            }
          }
        }
      }
    }
  }
};
