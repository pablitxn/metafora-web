import { FC } from 'react';

const Whatsapp: FC<IWhatsappProps> = ({ className }) => {
  const message = 'Hola, me gustaría participar!';

  return (
    <a href={`https://wa.me/+5491169480481?text=${message}`} target="_blank" rel="noreferrer">
      <svg className={className} width={75} height={66} viewBox="0 0 75 66" fill="none">
        <path fill="url(#prefix__pattern0)" d="M0 0h75v66H0z" />
        <defs>
          <pattern
            id="prefix__pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#prefix__image0" transform="matrix(.00324 0 0 .00368 0 0)" />
          </pattern>
          <image
            id="prefix__image0"
            width={309}
            height={272}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAAEQCAYAAADRfuOBAAAACXBIWXMAAC4jAAAuIwF4pT92AAAV0UlEQVR4nO2d/3EbR9KGx1/d/4QjIBSB4AgIRSA4AkIRHBWBqQhMRSAyApERCIzAQAQiIjggAl3tsffTEgKIBdAz09PzPFUo23IVucLuvvP2j+n57cePHwEAwAv/x50EAE8gagDgCkQNAFyBqAGAKxA1AHAFogYArkDUAMAViBoAuAJRAwBXIGoA4ApEDQBcgagBgCsQNQBwBaIGAK5A1ADAFYgaALgCUQMAVyBqAOAKRA0AXPEvbidkYhBCGIUQhvIZyZ8dyiqEMA8hPMlnLn8GlcLBKxCTTcEay++6SPCtL0TcZvLfs44AgmMQNdBiLOLVuq8UwnUsi46rm+HufIGowTG0rqsVMssC1pdFR+RmInpQIIga9KURr4l83lbwrS1DCPcicPcGrgd6gqjBa0w6n7PKv6kHEbd7QlXbIGqwCUK2HwTOMIgaBEnsX4mQnfONHMRdR+DAAIha3Uzl4yHRn5smB3cbQrjBveUFUauPgbiyK8LLaNyJuNETlwFErR6aEPM6hHBZ+xeRkEf5zmdmrqgC2Pvpn6GERd8RtOQ0Yf03EbWxsWtzC6LmF8TMDohbQhA1fyBmdkHcEkBOzQ8UAMrjTnJubMlSBFHzwVSqbYhZeazl3tEKogSiVjYjeRnoMyufpbhsmnhPhJxamQxEzP5B0NzQ7OT4KqJ2zLBMEHBq5TGWQkCp25mWGxNqNwc39u3pagdQtow3/nxY8He0llzbjYFrKQ5ErRwG8qD/u5ArXm8MYXzK1GE/7ohcO/+tlNzjo+zHJdd2AIhaGZTgzpadAYvWhywOO0Mux8a/17UUgsi19QRRs0/jzv4yeJXrzgDF0ifFtiLXuKL3Bq5nG3dSSMC17QFRs8tABMNSIWDdGbPj2TlYnSm3ENfGRvlXQNRsMhbRsPJCPUj4W2MINDXm4Nbi2G4NXItJEDV7NA/s3wauqp0PdkvH+/8YdubPWcjB3cm1wAaImi1uDezXfJRWAhLTu5nI4pM7NUB1dAuImg0GkmzPeUoTgw0PZyTilnMhWoqwcd8ERC0/I3FFuUIaNlWfTu4BnGvJw1YvbIFtUtkZiUPLIWiNmL2RvAyCdhpP8j2+ke81NWeyZa76HFtA1LIyEUFLXeFs8jDvELModMXtMcPv/4KwEX7mYioPYEqYApGeXDtBPtTc8oFTS08OQfvUyd1BOmaSb/skea9UfKlZ1HBqaUktaI+EmWYYSnU5ZRNvlb1sOLV0pBS0xhV8lPAHQbPBk+RR/0zo2i5rdGw4tTSkFLSFvDyImV0GIjapXFtVOTacWnzGCQWtzZ0haLZZycLzMZFrq6oqilOLyyhR28a60yICZTESF5ViN0kVjg1Ri0cqQWP/X/m0Z06k2JHwh/edB4SfcWhzJrEF7bOEtwha2awkPPyY4G8xkwXXLTi1OMwThBNVN1g6JsUsvYXnxRCnpk/s/MhaQggEzSczEZxlxL/dW8+N2IiaLtPIeRGmMdTBXELERcS/7YXXI/gIP/UYyaSEWLgOGWArKebsuUtjIGo6DKQ3LFYeBEGrl9iNuu7cP+GnDjETuwha3bSNurHmtJ2JaA68fMuI2unEnFWPoEHLNKKwvZXJvS4g/DyNmHk0BA22MYu4iP7poSqKqB1PzCQugga7iPncrWVEUtHPHeHn8VxHfLDY9gS7WMmCF6Pd48xDJRSndhzNQ/Utws+lDw36ErPiXnQYiqgdzkBEJ8bceRc5DUhGrKEJRYehhJ+HcxVJ0D4iaHAg80hz0ooOQ3FqhxGr2lnlLHlQo8nv/hXh63xX4ow+RO0wYpTTqXSCBvcRdh0sJQwtCsLP/kwjCBqVTtBiGmGyx3mJTbk4tX7EqjRRGABNYqRH1qWde4FT68dVBEG7Q9BAmaZwoD0996w0t4ZT289QHhZNUVvK6kfYCTGIkfst5mwDnNp+riO4tCmCBhGZRjh6r5iBkji112lc2nfln/lZwllrjOXT5WlLLmWOIBdBU4D6qnyhRbR4IGqvc6s8ntta2DkQgT00Z2hVmOEl2mHo45aFzxyI2m5iuDRLK91IChXH7o745GkGl1Ni5IPNuzVyarvRfmHvjAna7MTtXleepqU65SnCc2x+IcOpbUfbpVnaIKy5CRq3Vgba59Cadms4te1o54tuHApaIK9WDNr3yfR9x6n9ivbuASv752KNTOKk+DLQ3hv6xuouA5zar0yVE6tWwrNTc2i7IPwsA213Zfa+I2q/onnzH424mFijx4MIpfkyP/zPVWmeRjWxWihC1F4yUXYzFlazcaRZW11wa2WgeZ/O5H0xB6L2Es1BjY9GKkQptrdclDh3q0K03ZrJggGFgp80Vvo/ij/PQtm7EekviX4X03vLQLtdydxGd5zaTzRfyKURl5YyLDSbY4EXuHdriNpPNEXNQo5pGqnauYsznFoxaD6f5vJqhJ/PaFrytRHH8pRY1EKpM+0rRbNvzdQEZ5zaM5oW2sLcqVEGQQu0dxSF5nNqyq0has9ovogW+tJyhoFsnSqDmeJBLYiaMYaKjakPRraO5HzI3hOCFoOWWzPVs4ao6d4MCy4tV+jZhYJBGWjmwRA1Q2jdjLWRZOnIwDUgamXwJNGFBmZyqbWL2kBx3LGVSRUWRO0cYSsGrYX43MizV72oeSsQBCsPFqJWDJrRhQm3hqjpsDS0VcRKV/+FIYGF3awUQ1ATebXaRU3rJlgabRxrxNAx0N5RBlpuTfsA5aOoWdQGilVCM93UxrikvaMIXIWgNYua5pePqO2G3Jp9mhB0oXSV2VMOiNrpaOUjvMK2qTLQWphxahnRWlHMH8MP0AOt5xinlhGtpKY1UdPazwd1ofUcn+fOo9Yqalqrydra1E+Dx5aZPEYNtvKo9LUgahnQEjVrghYMighngpaDllvLmlerVdS0VhKL+TRLovZAzrEotBbprHm1WkVNayWx6NSsiMiado7i0HqeCT8zoPWlWxQ1K9c0kf4nKIcnWYxOJeuullpFTWMnwdpoElyzkfJYPhF2Fkvxbq1GUfNcJGjJKSh3nNheNIhagWhNsbAsarm2bS3YxF48WtFHtmJBjaKmVSSwnC+aKeVGDmFNHs0FWot1thFYtY8eOgXrOaOUbm0tiwWNtuWjdQ+z9aqRU/NLyvNHr4yH49Cf4hcmcmrHY/0lnieqgt6xa8AdGqmLbAMjCT+Pp4TcUQq3ZuFEetCl6LxajaKmsYKkTsIfy32CayXshF1kSfXg1I6jlBd5lcBJmTnEFtQoOq+GqPnnJrJboy/NH4gamCa2W7tA2MAStYmalTMxU3MdeSLuNadGgRVqE7Ua9n3uIqabOqOtA6xA+HkcJW4Fulcc17wNwlAwAaJWF9PIRQPCUB8UPTYKUauLp8hjgc442Blyg6jVx03kMPQtuwwgJ4hancQOQ/9NU27RFD30oTZRK34AnhKxw9Ag1dBaJqJ4o+jWJ0TtODz0u93IEXaxaNs8au0NhEwQftZN7DD0Lf1rkBpErW5WCXJf7xE2SAmidhyeQqqZHGkXk0sac4ui6F7D3378+GHgMpIyVzps9beC/s590PpeXuMDrq0IZkpzB3/PsfumRqfGaUfbmSQYKPlF8nhQB1neNcLP4/G2HegpkeAgbPbRaMWJORXmVWoUNa19bR73ODZbnD4n+D0Im23OFK4u26BJnNrxeN24fZXoFKovhosHQzm3MtvZlRnRapjOluapUdS0ZqF5nkYxTnS4zN8GCwdNU/L3EMI3+axk90UtTcTFHyFJoeB4PG8BWiV0KZcS9loQjVvZt9qlCcX+knDqtoLRSlr3HaeWEJxaP+bSgpGC95LrzLlQTEVgd3Em//+7c3HT+nvh1BKyUgqtYvd0WeA2UeEgyPc5y1RAGEmOry+tuM0c5t20RI1CQWK0VpEaEslNMv8u0e86E3FJuRF+cEJF/ELybp7ETaPpNiBq6WEE0WGkqoi2XMrCk0IoZgotDK24per1i4XW8xxzCOlecGqnUYuotYWDlMJ2LkIR07XdKqcRzsVplipuWs9z1sOQEbXTqGkI4iphq0eXS3lJtHva9hUGTqErblcFtYNoOeOsolbjhvYWrb94lk27GRkphWzHsBSROPVwl7G4wFSspf/txviz8iSCfCrvcp5IVfOOAq1Qqrau83kmxxbkhft6YmJ+mOHEq26vm9VjBIdKghZyH/Zds6hRAT2enMIWTqg6DkTQcrjM0BE3i71uWs/xIrcbRdROp9ZTk3ILW9gQtz73QbswcApthddKQUFL1LK6tFC5qGnF/OcVn0puQdiCiNvXPVXHW9m5YIkzybNZKCRoLc7ZT3ev3alpvYw1n3FpRdhCp+q4ErGYiMjNI1Y6T+XMQApjpBiSI2qZ0boBtR/cOxe3mrKP7TXOZGP6VxE561vacrcGaYXAy9ztHAFRUxO1C863zNKg64XceSg3oWdA1FRvQu1uLXSELdVeUS/krBaOFFs5EDUDzBVnqTOe+pmVfBexj90DHTSf29T9f1upXdSCcghaaxV0G9cyj81CAQF2oyVq2fvTWhA13dUFt/aSWwlHs50sVAi5wrapYtXTzFh2RO1Z1LTcBKL2K3PJ2zxYuzAj5BR8zefVRD4tIGr/j5ZbO69029Q+VlJI+Wj7MrOQq/I5VBwIubSwk6AFUXtGMwS1euybBZqG2D8IR1+Qy+FoPqcmCgQtNY8e2mSlmF94Y6EJ0TADKSRsntxUIzmelYH8TpfPO07tJ7i1dKzkO3pXuWt7zCQGmgWChbUFHFH7iWb1ZsoOg160x+LV2tN2nen3ai661g6jRtQ6zBRdwxlurTftCehvch/YkZjHTPm0qeIOgoCo2edG8QpLmk1vgSepHL+rQNzWGdt/NN3hncXx5IjaSzRXHdzaccwqELdJxlyaa5cWqH5u5VZx9tZa+oFqOphFm5EsDlbnoR3Kh0xiMJBeMi1RW1g9TQ2n9ivabi1XMtgL7cjr36V5t9Rq6TqjoAVZGDRdmmaqRhWc2nZmit3Wgb41dVr3Nsl4iMohrCWkztV1r92XtracL8apbUd7NTW7qhVK696G4n4s594Wcp05txHdKIu/6ecZp7YbrYNdW7Ie8FoBQxE67WT4KXw2UCxqXO0/ij/PfJ4Yp7Yb7VyYyUqRI7oHBf8h7Qa5ZrktZRGzUP2OEXWYLnzh1F5H2619onCQnEnnEzv/tpT7a2UBa0T1b8WfV0Q1H1F7namcRqTJH5bGtFRGK3Bj5cVqIQ7Gkhtv83iaQl7Eooyo7UfbrZnt76mMkYhb+znk5V+LYNzLx2JlW7uCX0zPJaK2n+aB/6b8MwlD7TEQoRu+ctbETATMenuOdtgZSnpmEbV+aK96gTAUIjGS51Uz7CxqZwzVz37EqGLh1CAGtxEKIlclbfVD1Poxl54jTZjgAdo0xYq3yj9zUVo7EqLWH21nxbYp0GQSaTx6cZNmELX+rJS345g6rAKKZhTJTd2VuAuGQsFhzJXs/ZLT3EGJgQiPdthZ7NgsnFp/hooPDi4NtLiPIGhB0i1FzgFE1PozUfxZ7AMFDW4jtBoFSbMUO1mG8LM/hJ5giRgNtkHCzlHJhSycWj8IPcES00iCFiTsLLoyj6j1w/U5iVAUMYYstBQddrYQfvZDa1M7oSecQkxBc3NIEE5tPyPFKR2EnnAsMQUtSCHMxalniNp+NA+dJfSEY4gtaJ89jZon/NyPVujJHDU4htiC9ijjtdyAU3sdzdATlwaHElvQ1sr9lyZA1F5HM/QknwaHcBNZ0II4NBd5tC7/snMpJtFaxRZM5YADaFz9ZeQv7IPXIaWI2m4mhJ6QmFib0zf57PmZJPzcjWaugdAT9tFuTYotaHclzkg7BKqfu1kpjUWm6gn7iF0QaKniWcSpbUfz4FtCT9jFQJ6PVILmqnVjF+TUtkPoCbEZybOheabsLhZeK53bwKlth6onxKSZhPFPIkFb1iRoAae2FUJPiEV7lkDsYkDL2tOezr7g1H6l1NBzJA2bjTP8IZ+VvEQcx5ef1p2lFLRxjQdmU/38Fa2q50OCLSgjqZzt66lby0tV/KysAhnLwpIi1GypKoe2CU7tJZqhZyyX1nVk/8hZj/temDOZlDqvpQJmgKE8A98QtLTg1F7SPITvlX7W74oP1kQ+Y6UX5EEaMCli6DMQVxzjYOF9VC9oAVF7QfMw/kfpZ2mEnpPOR8s9bnLnYSa9EQayUFxFvF+v8SCpiKoFLVD9fEHuAsFgw5GleDEu5YO4HU9uMQty/zQnyhQNTu0nOULPoQjYRPF3n8Kd5Ouqq5gdwVAWgphOug8fKQC9BFF7JmXoOZT/P01Y3j+UR6nY0Wf3K2NxZbkXobU8Q+xY2YDw85nYoeeoE1paFbIuF/K5EWG7qTw0HYqATBNXMnexkGvBUW8Bp/ZMjNBz3BEyCy/CqSxE4O4rEbhBx1FfGLieFgoCe0DUdEPPZacXLGeeJTatwM2cuYVhp1BjIce5CfmzHiBq6WZZeWUp4tZ+SnJxAxGw9mM1NUC4eQCImm7oCT9Fbi4fS+dJDiW/aV3EunyWKivhZk9qFzXN0BN2045gmss/23+P9aKO5N6OOkI2KiwlsBR35uaQ4VTULmqEnvlZdkLWXUI3E3Eabvl/3T8vTbh2gTs7gdpFbWassgV1gztToGZRa1b37wauA2AtVc3r6r8JBWpuvnV33D4UCftulalZ1NgADDl5FDEj1FSm1iGRw0LK+X1pusw/yG6GNyGEP+WlAXs0ebN30lKCoEWgVqdWeui5lv66+y17TVcSytzLi3NNMcQES7kXDAmITK2FgnmBTm0pQjU7YjID4paPRWcwACSgRlErqerZCtmt0haZseQSLxV+FrwOObNM1ChqV3IIiVVSbBYfyvcwdb7xPjVtWoBqZkZqFDWLoWfOsT5Tg+N1SqMNMe/ZBZCf2kTNUuj50MmRWVjVW/fmZf5bbNrUQO0DNM1Rm6jlDj0fOhVLyyt630OSa0M7xwkRqE3UUoeer7VelEJpo8i1WXTuH0JWADWJWqrQ85TWC+sMN4YqenRx3aGX5MgKpCZRixl61hqWtCLXzisrsdjw2BlmOSc/Vj41iZp26FnbQSR9GXWGM47lnxYcXTu3bdYZUkk46ZBaRE0r9LRWsSyJ7jTaQYThju1e11VHrGYb/w0VUMvez2P3eq47uRXyK6fRFZp9tOK3iycWFdhFLU7tkNDTQ8USoFpqELU+oSdCBuCEGsLPXSOSETIAh3h3agPJvbRJaIQMwDk1OLWnztBEZloBOKf2I/IAwBm1nlEAAE5B1ADAFYgaALgCUQMAVyBqAOAKRA0AXIGoAYArEDUAcAWiBgCuQNQAwBWIGgC4AlEDAFcgagDgCkQNAFyBqAGAKxA1AHAFogYArkDUAMAViBoAuAJRAwBXIGoA4ApEDQBcgagBgCsQNQBwBaIGAK5A1ADAFYgaAPghhPBfhHCy1Eut/LYAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </a>
  );
};

export default Whatsapp;
